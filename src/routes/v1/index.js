const express = require('express');
const airportRoute = require('./airport.route');
const aircraftRoute = require('./aircraft.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/airports',
    route: airportRoute,
  },
  {
    path: '/aircrafts',
    route: aircraftRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
