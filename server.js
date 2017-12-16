const http = require('http');
const app = require('./app');

/* Get PORT from environment and store in Express. */
const port = process.env.PORT || '3000';
/* Create HTTP server. */
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
