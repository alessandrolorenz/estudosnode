const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((rep, res) => {
    console.log(rep.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello</h1></body></html>');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
