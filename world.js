
var serve = require('http');
serve.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');
