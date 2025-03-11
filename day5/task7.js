import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (req.url === '/') {
        res.end('Welcome to the Home Page');
    } else if (req.url === '/about') {
        res.end('This is the About Page');
    } else if (req.url === '/contact') {
        res.end('Contact us at contact@example.com');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
