const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

app.use('/public', express.static('public'));

app.get('*', function (request, response) {
  console.log(__dirname)
  response.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(port);
console.log("server started on port " + port); 