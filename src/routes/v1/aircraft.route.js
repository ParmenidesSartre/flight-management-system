const aircraftRouter = require('express').Router();
const validate = require('../../middlewares/validate');
const aircraftValidation = require('../../validations/aircraft.validation');
const aircraftController = require('../../controllers/aircraft.controller');

aircraftRouter
  .route('/')
  .post(validate(aircraftValidation.createAircraft), aircraftController.createAircraft)
  .get(validate(aircraftValidation.getAircrafts), aircraftController.getAircrafts);

aircraftRouter
  .route('/:aircraftId')
  .get(validate(aircraftValidation.getAircraftById), aircraftController.getAircraftsById)
  .put(validate(aircraftValidation.updateAircraft), aircraftController.updateAircraft)
  .delete(validate(aircraftValidation.deleteAircraft), aircraftController.deleteAircraft);

module.exports = aircraftRouter;
