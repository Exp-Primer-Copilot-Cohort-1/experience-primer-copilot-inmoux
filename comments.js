// Create web server
// Import the required modules
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the status code and content type of the response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response
  res.end('Hello, world!\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
