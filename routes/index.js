const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.dagwanRoute);
routes.get('/emmanuel', lesson1Controller.emmanuelRoute);
routes.get('/adams', lesson1Controller.adamsRoute);

module.exports = routes;