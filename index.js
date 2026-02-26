const express = require('express');
const app = express();
const port = 3000; // You can choose any port

app.get('/', (req, res) => {
  res.send('Server running');
});

app.get('/get', (req, res) => {
  res.json({ message: 'hello' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
