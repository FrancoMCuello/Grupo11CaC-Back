const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Prueba');
});

const PORT = 3000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));