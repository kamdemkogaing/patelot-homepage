import dotenv from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'
import SftpClient from 'ssh2-sftp-client'

dotenv.config({ path: path.resolve(process.cwd(), '.env.deploy') })

const requiredVariables = [
  'SFTP_HOST',
  'SFTP_USERNAME',
  'SFTP_PASSWORD',
  'LOCAL_BUILD_DIR',
  'REMOTE_DEPLOY_DIR',
]

async function deploy() {
  for (const variable of requiredVariables) {
    if (!process.env[variable]?.trim()) {
      throw new Error(`Umgebungsvariable ${variable} fehlt. Bitte .env.deploy prüfen.`)
    }
  }

  const localBuildDirectory = path.resolve(process.cwd(), process.env.LOCAL_BUILD_DIR.trim())
  const remoteDeployDirectory = process.env.REMOTE_DEPLOY_DIR.trim()
  const sftpPort = Number(process.env.SFTP_PORT || 22)

  if (!Number.isInteger(sftpPort) || sftpPort < 1 || sftpPort > 65535) {
    throw new Error('SFTP_PORT muss eine Portnummer zwischen 1 und 65535 sein.')
  }

  const remoteSegments = remoteDeployDirectory.split('/')
  if (
    !remoteDeployDirectory.startsWith('/') ||
    remoteDeployDirectory.includes('\\') ||
    remoteSegments.some((segment) => segment === '.' || segment === '..') ||
    path.posix.normalize(remoteDeployDirectory) === '/'
  ) {
    throw new Error('REMOTE_DEPLOY_DIR muss ein absoluter Zielordner außerhalb des Server-Hauptverzeichnisses sein und darf keine .- oder ..-Segmente enthalten.')
  }

  if (!fs.existsSync(localBuildDirectory) || !fs.statSync(localBuildDirectory).isDirectory()) {
    throw new Error(`Build-Ordner nicht gefunden: ${localBuildDirectory}. Bitte zuerst npm run build ausführen.`)
  }
  const indexFile = path.join(localBuildDirectory, 'index.html')
  if (!fs.existsSync(indexFile) || !fs.statSync(indexFile).isFile()) {
    throw new Error(`Keine index.html im Build-Ordner gefunden: ${indexFile}`)
  }

  const sftp = new SftpClient('Patelot-Deployment')
  let isConnected = false
  sftp.on('upload', (info) => {
    console.log(`Hochgeladen: ${path.relative(localBuildDirectory, info.source)}`)
  })

  try {
    console.log(`Verbinde mit ${process.env.SFTP_HOST.trim()}:${sftpPort} ...`)
    await sftp.connect({
      host: process.env.SFTP_HOST.trim(),
      port: sftpPort,
      username: process.env.SFTP_USERNAME.trim(),
      password: process.env.SFTP_PASSWORD,
      readyTimeout: 30000,
      keepaliveInterval: 10000,
      keepaliveCountMax: 3,
    })
    isConnected = true

    const remoteType = await sftp.exists(remoteDeployDirectory)
    if (remoteType && remoteType !== 'd') {
      throw new Error(`Server-Ziel ist kein Verzeichnis: ${remoteDeployDirectory}`)
    }
    if (remoteType === 'd') {
      console.log(`Alter Server-Build wird entfernt: ${remoteDeployDirectory}`)
      await sftp.rmdir(remoteDeployDirectory, true)
    }

    await sftp.mkdir(remoteDeployDirectory, true)
    console.log(`Build wird nach ${remoteDeployDirectory} hochgeladen ...`)
    await sftp.uploadDir(localBuildDirectory, remoteDeployDirectory, { useFastput: false })
    console.log('Deployment erfolgreich abgeschlossen.')
  } finally {
    if (isConnected) {
      await sftp.end()
    }
  }
}

try {
  await deploy()
} catch (error) {
  console.error('Deployment fehlgeschlagen:', error instanceof Error ? error.message : error)
  process.exitCode = 1
}
