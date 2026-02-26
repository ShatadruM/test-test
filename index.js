const express = require('express');
const app = express();
const port = 3000; // You can choose any port

app.get('/', (req, res) => {
  res.send('Server running');
});

app.get('/get', (req, res) => {
  res.json({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
