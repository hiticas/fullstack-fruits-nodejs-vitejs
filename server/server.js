const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: ["http://localhost:5173","http://127.0.0.1:5173"]
}

app.use(cors(corsOptions));

app.get('/api', async (req, res) => {
  res.json({ "fruits": ["apple", "orange", "banana"] });
});

app.listen(8080, () => console.log(`Server running on port 8080`));