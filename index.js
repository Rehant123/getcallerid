const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Handle GET request for generating caller ID
app.get('/', (req, res) => {
  const callerId = uuidv4();
  res.json({ callerId });
});

app.listen(port, () => {
  console.log(`Caller ID backend listening at http://localhost:${port}`);
});
