const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 9000;
const server = http.createServer(app);

app.get('/', (req, res) => {
  console.log(`GET request from ${req.ip}`);
  res.status(403);
  res.end('403 Forbidden');
});

server.listen(port, () => {
  console.log('Server is currently running...');
});
