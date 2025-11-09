# Element API (minimal)

This folder contains a tiny Node/Express API used as an example backend to connect to the Hostinger MySQL database.

Files
- `index.js` — minimal Express server with two endpoints:
  - `GET /ping` — returns OK and server time
  - `GET /db-time` — runs `SELECT NOW()` on the database and returns the DB time (useful to validate connection)
- `.env.example` — example environment variables (do not commit real credentials)

Quick start (local)

```bash
cd api
cp .env.example .env
# Edit .env and fill DB_PASS and DB_HOST as needed
npm install
npm start
```

Notes
- Never commit `.env` or real database credentials to source control.
- Frontend code must never contain DB credentials — always call this API from the frontend.
- Hostinger: verify your Hostinger plan supports Node (some plans only support PHP); if not, you can host the API on a separate service (Heroku, Railway, Render, VPS) and point the frontend there.

Deployment (Hostinger via SSH)

This repository includes a workflow template to deploy the `api/` folder to a server over SSH and manage the process with `pm2`:

- Workflow: `/.github/workflows/deploy-api-ssh.yml` (runs on push to `main` and can be triggered manually)
- Required repository secrets (add these in GitHub → Settings → Secrets):
  - `SSH_HOST` — server host (IP or domain)
  - `SSH_USER` — SSH user
  - `SSH_PRIVATE_KEY` — private key (PEM) for SSH access
  - `SSH_PORT` — optional (default 22)
  - `REMOTE_PATH` — remote absolute path where the API should be deployed (e.g. `/home/username/api`)

Server setup checklist before running the workflow:
- Ensure SSH access for `SSH_USER` and that the SSH key is authorized in `~/.ssh/authorized_keys`.
- Node.js and npm should be installed on the server.
- Optional but recommended: install `pm2` (workflow will try to install it if missing).

After deploy the workflow will:
- Upload a zip of the `api/` folder to `REMOTE_PATH`.
- Unpack, install production dependencies, and start or restart the service using `pm2` under the name `element-api`.

Optional smoke-test after deploy

- If you'd like the deploy workflow to verify the API is up after deploy, add a repository secret named `DEPLOY_API_URL` that contains the public base URL of your API (for example `https://api.example.com` or `https://example.com:3000`).
- When `DEPLOY_API_URL` is present the workflow will call `DEPLOY_API_URL/ping` and assert the response contains an `ok` property — the `index.js` server responds with `{ ok: true, time: ... }` on that endpoint.
- The smoke-test step is optional and the workflow will skip it when the secret is not present.
