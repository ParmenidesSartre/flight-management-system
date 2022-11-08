const mongoose = require('mongoose');
const { Aircraft } = require('../../src/models');

const aircraftOne = {
  _id: mongoose.Types.ObjectId(),
  aircraft: 'Boeing 737-800',
  firstclass_seats: 12,
  business_seats: 28,
  economy_seats: 120,
};
const aircraftTwo = {
  _id: mongoose.Types.ObjectId(),
  aircraft: 'Boeing 737-900',
  firstclass_seats: 12,
  business_seats: 28,
  economy_seats: 120,
};
const aircraftThree = {
  _id: mongoose.Types.ObjectId(),
  aircraft: 'Boeing 737-1000',
  firstclass_seats: 12,
  business_seats: 28,
  economy_seats: 220,
};
const aircraftFour = {
  _id: mongoose.Types.ObjectId(),
  aircraft: 'Boeing 737-1200',
  firstclass_seats: 12,
  business_seats: 28,
  economy_seats: 320,
};

const insertAircrafts = async (aircrafts) => {
  const res = await Aircraft.insertMany(aircrafts.map((aircraft) => ({ ...aircraft })));
  return res;
};

module.exports = {
  aircraftOne,
  aircraftTwo,
  aircraftThree,
  aircraftFour,
  insertAircrafts,
};
