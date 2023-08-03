// Import required modules
const express = require('express');
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Middleware to enable CORS
app.use(cors());

// Define a basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
