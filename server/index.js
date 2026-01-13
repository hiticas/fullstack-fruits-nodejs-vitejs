const express = require('express');
const cors = require('cors');

const app = express();

// Temporary permissive setup to confirm fix (remove true later)
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'https://fullstack-fruits.netlify.app',  // ← no trailing slash!
    'https://*.netlify.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Explicitly handle preflight OPTIONS for ALL routes (critical on Vercel!)
app.options('*', cors());  // Uses same corsOptions

// Your route
app.get('/api', (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

// For local testing only – comment out or conditional on Vercel
// if (process.env.NODE_ENV !== 'production') {
//   app.listen(8080, () => console.log('Server running on port 8080'));
// }

module.exports = app;