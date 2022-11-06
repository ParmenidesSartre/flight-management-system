// Array of all airport airportCode , airportName, airportName and country in the world
// Example: { airportCode: 'LHR', airportName: 'London Heathrow', city : 'London' , country: 'United Kingdom' }

const arrayAirports = [
  {
    airportCode: 'LHR',
    airportName: 'London Heathrow',
    city: 'London',
    country: 'United Kingdom',
  },
  {
    airportCode: 'CDG',
    airportName: 'Charles de Gaulle',
    city: 'Paris',
    country: 'France',
  },
  {
    airportCode: 'JFK',
    airportName: 'John F Kennedy International',
    city: 'New York',
    country: 'United States',
  },
  {
    airportCode: 'SFO',
    airportName: 'San Francisco International',
    city: 'San Francisco',
    country: 'United States',
  },
  {
    airportCode: 'DXB',
    airportName: 'Dubai International',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    airportCode: 'HND',
    airportName: 'Tokyo Haneda',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    airportCode: 'AMS',
    airportName: 'Amsterdam Schiphol',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    airportCode: 'MAD',
    airportName: 'Adolfo Suárez Madrid–Barajas',
    city: 'Madrid',
    country: 'Spain',
  },
  {
    airportCode: 'FCO',
    airportName: 'Leonardo da Vinci–Fiumicino',
    city: 'Rome',
    country: 'Italy',
  },
  {
    airportCode: 'PEK',
    airportName: 'Beijing Capital International',
    city: 'Beijing',
    country: 'China',
  },
];

const mongoose = require('mongoose');
const { Airport } = require('../../src/models');

const airportOne = {
  _id: mongoose.Types.ObjectId(),
  airportCode: 'LHR',
  airportName: 'London Heathrow',
  city: 'London',
  country: 'United Kingdom',
};
const airportTwo = {
  _id: mongoose.Types.ObjectId(),
  airportCode: 'CDG',
  airportName: 'Charles de Gaulle',
  city: 'harles de Gaulle',
  country: 'France',
};
const airportThree = {
  _id: mongoose.Types.ObjectId(),
  airportCode: 'JFK',
  airportName: 'John F. Kennedy International',
  city: 'New York',
  country: 'United States',
};
const airportFour = {
  _id: mongoose.Types.ObjectId(),
  airportCode: 'HND',
  airportName: 'Tokyo Haneda',
  city: 'Tokyo',
  country: 'Japan',
};

const insertAirports = async (airports) => {
  await Airport.insertMany(airports.map((airport) => ({ ...airport })));
};

module.exports = {
  airportOne,
  airportTwo,
  airportThree,
  airportFour,
  insertAirports,
  arrayAirports,
};
