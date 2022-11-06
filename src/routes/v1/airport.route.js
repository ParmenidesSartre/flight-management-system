const airportRouter = require('express').Router();
const validate = require('../../middlewares/validate');
const airportValidation = require('../../validations/airport.validation');
const airportController = require('../../controllers/airport.controller');

airportRouter
  .route('/')
  .get(airportController.getAirports)
  .post(validate(airportValidation.createAirport), airportController.createAirport);

airportRouter.route('/admin').post(airportController.createAirportAdmin);

airportRouter
  .route('/:airport_id')
  .get(validate(airportValidation.getAirport), airportController.getAirportById)
  .put(validate(airportValidation.updateAirport), airportController.updateAirportById)
  .delete(validate(airportValidation.deleteAirport), airportController.deleteAirportById);

module.exports = airportRouter;
