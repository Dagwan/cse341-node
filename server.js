// Import the Express framework and create an Express application instance.
const express = require('express');
const app = express();

// Define the port number on which the server will listen.
const port = 3000;

// Use the routes defined in the 'index.js' file for all incoming requests at the root path ('/').
app.use('/', require('./routes/index'));

// Start the Express server and listen on the specified port or use the default port (3000).
app.listen(process.env.PORT || port, () => {
  // Log a message to indicate that the web server is listening on the chosen port.
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
