const express = require('express');
const path = require('path');
const port = 80;
const app = express();

app.use((res, req, next) => {
  console.log(req.req.method, req.req.originalUrl)
  next();
});

// serve static assets normally
app.use('/src', express.static('src'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  console.log(__dirname)
  response.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(port);
console.log("server started on port " + port); 