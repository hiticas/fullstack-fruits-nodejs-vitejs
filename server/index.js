const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://fullstack-fruits.netlify.app",  // ← removed trailing slash
    "https://*.netlify.app"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Explicitly handle OPTIONS preflight (very important on Vercel!)
app.options('*', cors(corsOptions));

// Your route
app.get('/api', (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

// Remove this for Vercel – it crashes serverless functions
// app.listen(8080, () => console.log(`Server running on port 8080`));

// Keep for local testing if you want (optional)
// if (process.env.NODE_ENV !== 'production') {
//   app.listen(8080, () => console.log('Local server on 8080'));
// }

module.exports = app;