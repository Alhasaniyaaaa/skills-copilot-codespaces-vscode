// Create web server
// Create a server with a route to /comment
// Create a route for /comment that accepts POST requests
// Create a route for /comment that accepts GET requests
// Create a route for /comment that accepts PUT requests
// Create a route for /comment that accepts DELETE requests

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/comment', (req, res) => {
  res.send('POST request to the homepage');
});

app.get('/comment', (req, res) => {
  res.send('GET request to the homepage');
});

app.put('/comment', (req, res) => {
  res.send('PUT request to the homepage');
});

app.delete('/comment', (req, res) => {
  res.send('DELETE request to the homepage');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Run this file using node comment.js
// Open the browser and navigate to http://localhost:3000/comment
// You will see the response based on the request method (POST, GET, PUT, DELETE)

// You can also use Postman to test the API routes
// Install Postman from https://www.postman.com/
// Create a new request and set the method to POST, GET, PUT, DELETE
// Set the request URL to http://localhost:3000/comment
// Send the request and check the response
