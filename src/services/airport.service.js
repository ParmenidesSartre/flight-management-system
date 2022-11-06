const { Airport } = require('../models');
const formatter = require('../utils/formatter');

const getAirports = async () => {
  const airports = await Airport.paginate();
  return formatter(airports);
};

const createAirport = async (data) => {
  const airport = await Airport.create(data.body);
  return formatter(airport);
};

const getAirportById = async (data) => {
  const airport = await Airport.findById(data.params.airport_id);
  return formatter(airport);
};

const updateAirportById = async (data) => {
  const airport = await Airport.findByIdAndUpdate(data.params.airport_id, data.body, { new: true });
  return formatter(airport);
};

const deleteAirportById = async (data) => {
  const airport = await Airport.findByIdAndDelete(data.params.airport_id);
  return formatter(airport);
};

module.exports = {
  getAirports,
  getAirportById,
  createAirport,
  updateAirportById,
  deleteAirportById,
};
