const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

// serve static assets normally

app.use((res, req, next) => {
  console.log(req.req.method, req.req.originalUrl)
  next();
});
app.use('/src', express.static('src'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log("server started on port " + port);
