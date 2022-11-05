const express = require('express');
const airportRoute = require('./airport.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/airports',
    route: airportRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
