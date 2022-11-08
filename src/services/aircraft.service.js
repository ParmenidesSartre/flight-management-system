const { Aircraft } = require('../models');
const formatter = require('../utils/formatter');

const createAicraft = async (data) => {
  const aircraft = await Aircraft.create(data.body);
  return formatter(aircraft);
};

const getAircrafts = async () => {
  const aircrafts = await Aircraft.paginate();
  return formatter(aircrafts);
};

const getAircraftById = async (data) => {
  const aircraft = await Aircraft.findById(data.params.aircraftId);
  return formatter(aircraft);
};

const updateAircraft = async (data) => {
  const aircraft = await Aircraft.findByIdAndUpdate(data.params.aircraftId, data.body, { new: true });
  return formatter(aircraft);
};

const deleteAircraft = async (data) => {
  const aircraft = await Aircraft.findByIdAndDelete(data.params.aircraftId);
  return formatter(aircraft);
};

module.exports = {
  createAicraft,
  getAircrafts,
  getAircraftById,
  updateAircraft,
  deleteAircraft,
};
