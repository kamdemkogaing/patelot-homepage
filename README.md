# React + Vite

## SFTP-Deployment

1. Installiere die Abhängigkeiten mit `npm install`.
2. Kopiere `.env.deploy.example` nach `.env.deploy` (in PowerShell:
   `Copy-Item .env.deploy.example .env.deploy`) und trage deine
   SFTP-Zugangsdaten sowie den absoluten Server-Zielordner ein. `LOCAL_BUILD_DIR`
   ist für den Vite-Standard-Build bereits auf `dist` gesetzt.
3. Führe `npm run deploy` aus. Der Befehl erstellt zuerst einen neuen Build und
   lädt ihn anschließend hoch. Mit `npm run deploy:upload` lässt sich ein
   bereits vorhandener Build hochladen.

**Achtung:** Der gesamte konfigurierte Server-Zielordner und sein Inhalt werden
vor jedem Upload gelöscht und neu erstellt. Verwende ausschließlich einen
eigens für diese App vorgesehenen Ordner, der keine anderen Dateien enthält.
Während des Uploads ist die Website möglicherweise vorübergehend nicht
verfügbar; bei einem Upload-Fehler kann der Ordner unvollständig bleiben.
Die Datei `.env.deploy` enthält Zugangsdaten und wird nicht in Git aufgenommen.
Umgebungsvariablen, die bereits in der Shell gesetzt sind, haben Vorrang vor
den Werten aus `.env.deploy`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
