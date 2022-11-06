const httpStatus = require('http-status');
const { airportService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAirports = catchAsync(async (req, res) => {
  const airports = await airportService.getAirports();
  res.status(httpStatus.OK).send(airports);
});

const getAirportById = catchAsync(async (req, res) => {
  const airport = await airportService.getAirportById(req);
  res.status(httpStatus.OK).send(airport);
});

const createAirport = catchAsync(async (req, res) => {
  const airport = await airportService.createAirport(req);
  res.status(httpStatus.CREATED).send(airport);
});

const updateAirportById = catchAsync(async (req, res) => {
  const airport = await airportService.updateAirportById(req);
  res.status(httpStatus.OK).send(airport);
});

const deleteAirportById = catchAsync(async (req, res) => {
  const airport = await airportService.deleteAirportById(req);
  res.status(httpStatus.OK).send(airport);
});

module.exports = {
  getAirports,
  getAirportById,
  createAirport,
  updateAirportById,
  deleteAirportById,
};
