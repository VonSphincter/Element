# Element React App

This project is a small React + TypeScript demo located in the `project 2/` directory. It uses Vite and Tailwind CSS.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## CI/CD / Deploy

This repository includes GitHub Actions workflows to build the frontend and optionally deploy it to Hostinger.

Automatic Hostinger deploy (FTP/SFTP)

- A workflow `/.github/workflows/deploy-hostinger.yml` builds `project 2` and deploys the `project 2/dist` folder to Hostinger via FTP/SFTP.
- Before enabling automatic deploys you must add the following repository secrets (Settings → Secrets):
   - `HOSTINGER_HOST` — your Hostinger FTP/SFTP host (e.g. `ftp.example.com`)
   - `HOSTINGER_USERNAME` — FTP/SFTP username
   - `HOSTINGER_PASSWORD` — FTP/SFTP password (or an SFTP key if you adapt the workflow)
   - Optional: `HOSTINGER_PORT` — port number (defaults to 21)
   - Optional: `HOSTINGER_PATH` — remote path to upload to (for most Hostinger accounts this is `/public_html`)

Example: after adding secrets, push to `main` and the workflow will build and upload `project 2/dist` to your Hostinger site root.

Notes about the backend (API)

- A minimal Node/Express example API is provided in the `api/` folder. Hostinger plans differ — some support Node hosting and some do not. If your Hostinger plan does not support Node, host the API elsewhere (Render, Railway, DigitalOcean, etc.) and update the frontend to call that URL.
- Do NOT add DB credentials to the repo. Use GitHub Secrets or your host's environment settings for production credentials.

