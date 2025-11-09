// Minimal Node/Express API that connects to MySQL using environment variables.
// Usage:
// 1. Copy `.env.example` to `.env` and fill in values.
// 2. npm install
// 3. npm start

const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

const {
  DB_HOST = 'localhost',
  DB_PORT = 3306,
  DB_NAME = '',
  DB_USER = '',
  DB_PASS = '',
  PORT = 3000
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT || 3306),
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Simple DB check endpoint. Returns server time from the database if connection works.
app.get('/db-time', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    return res.json({ ok: true, now: rows[0].now });
  } catch (err) {
    console.error('DB error', err);
    return res.status(500).json({ ok: false, error: String(err.message || err) });
  }
});

app.listen(PORT, () => {
  console.log(`Element API listening on port ${PORT} (DB: ${DB_USER}@${DB_HOST}:${DB_PORT}/${DB_NAME})`);
});
