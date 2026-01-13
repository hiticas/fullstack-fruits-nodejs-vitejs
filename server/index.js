const express = require('express');
const cors = require('cors');

const app = express();

// CORS config – fixed trailing slash issue
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://fullstack-fruits.netlify.app",   // no trailing slash
    "https://*.netlify.app"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Handle OPTIONS preflight explicitly (helps ensure CORS works)
app.options('*', cors(corsOptions));

// Your route
app.get('/api', (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

// NO app.listen() here – Vercel doesn't need/want it

// Optional: local testing only
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log(`Local dev server on port ${PORT}`));
}

module.exports = app;