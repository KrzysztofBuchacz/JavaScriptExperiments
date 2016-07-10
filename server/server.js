var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.jpg': 'image/jpg'
}

http.createServer(function (request, response) {
  var data = '';
  request.on('data', function (chunk) {
    data += chunk;
  });
  request.on('error', function (err) {
    console.error(err);
  });
  request.on('end', function () {
    var filePath = url.parse(request.url, true).pathname;
    if (request.method === 'POST') {
    } else if (request.method === 'GET') {
      if (filePath === '/') {
        filePath += 'index.html';
      }
      var fullPath = __dirname + path.normalize(filePath);
      fs.exists(fullPath, function (exists) {
        if (exists) {
          response.writeHead(200, { 'Content-Type': contentTypes[path.extname(fullPath)] });
          fs.readFile(fullPath, function (err, data) {
            if (err) console.log(err);
            response.end(data);
          });
        } else {
          console.log('path not found: ' + filePath);
          response.end(404);
        }
      });
    }
  });
})
  .listen(8080, '127.0.0.1');
  //.listen(8080, '192.168.0.8');

console.log('Listening...');
