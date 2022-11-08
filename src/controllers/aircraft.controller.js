const httpStatus = require('http-status');
const { aircraftService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createAircraft = catchAsync(async (req, res) => {
  const aircraft = await aircraftService.createAicraft(req);
  res.status(httpStatus.CREATED).send(aircraft);
});

const getAircrafts = catchAsync(async (req, res) => {
  const aircrafts = await aircraftService.getAircrafts();
  res.send(aircrafts);
});

const getAircraftsById = catchAsync(async (req, res) => {
  const aircraft = await aircraftService.getAircraftById(req);
  res.send(aircraft);
});

const updateAircraft = catchAsync(async (req, res) => {
  const aircraft = await aircraftService.updateAircraft(req);
  res.send(aircraft);
});

const deleteAircraft = catchAsync(async (req, res) => {
  const aircraft = await aircraftService.deleteAircraft(req);
  res.send(aircraft);
});

module.exports = {
  createAircraft,
  getAircrafts,
  getAircraftsById,
  updateAircraft,
  deleteAircraft,
};
