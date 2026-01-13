const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://fullstack-fruits.netlify.app/",
    "https://*.netlify.app"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'], 
  allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json({ "fruits": ["apple", "orange", "banana"] });
});

app.listen(8080, () => console.log(`Server running on port 8080`));

module.exports = app;
