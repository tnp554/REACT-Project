const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/message', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required.' });
  }
  res.json({ message: `Data received for ${name} (${email}).` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
