// Import the Express Router module to create a router instance.
const routes = require('express').Router();

// Import the lesson1Controller module, which contains controller functions.
const lesson1Controller = require('../controllers');

// Define a route that handles HTTP GET requests at the root path ('/').
routes.get('/', lesson1Controller.nanretRoute);

// Define a route that handles HTTP GET requests at the '/emmanuel' path.
routes.get('/emmanuel', lesson1Controller.emmanuelRoute);

// Define a route that handles HTTP GET requests at the '/adams' path.
routes.get('/adams', lesson1Controller.adamsRoute);

// Export the router instance, making these routes available for use in the main application.
module.exports = routes;
