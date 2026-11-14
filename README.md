# React + Vite

## Sprachen

Der Sprachumschalter im Header zeigt die Seite auf Deutsch, Englisch oder
Französisch. Die Auswahl wird lokal im Browser gespeichert; standardmäßig wird
Deutsch verwendet. Die Texte stehen in `src/translations.js`. Der
herunterladbare Flyer ist weiterhin nur auf Deutsch verfügbar.

## SFTP-Deployment

1. Installiere die Abhängigkeiten mit `npm install`.
2. Kopiere `deploy.env.example` nach `.env.deploy` (in PowerShell:
   `Copy-Item deploy.env.example .env.deploy`; in Git Bash:
   `cp deploy.env.example .env.deploy`) und trage deine
   SFTP-Zugangsdaten sowie den absoluten Server-Zielordner ein. `LOCAL_BUILD_DIR`
   ist für den Vite-Standard-Build bereits auf `dist` gesetzt.
3. Führe `npm run deploy` aus. Der Befehl prüft die Konfiguration, erstellt einen neuen Build und
   lädt ihn anschließend hoch. Mit `npm run deploy:upload` lässt sich ein
   bereits vorhandener Build hochladen. `npm run deploy:check` prüft die
   Konfiguration ohne Build und ohne Serververbindung; Zugangsdaten und
   Zielordner werden dabei nicht am Server überprüft.

**Achtung:** Der gesamte konfigurierte Server-Zielordner und sein Inhalt werden
vor jedem Upload gelöscht und neu erstellt. Verwende ausschließlich einen
eigens für diese App vorgesehenen Ordner, der keine anderen Dateien enthält.
Während des Uploads ist die Website möglicherweise vorübergehend nicht
verfügbar; bei einem Upload-Fehler kann der Ordner unvollständig bleiben.
Die Datei `.env.deploy` enthält Zugangsdaten und wird nicht in Git aufgenommen.
Trage niemals Zugangsdaten in die versionierte Vorlage `deploy.env.example` ein.
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
