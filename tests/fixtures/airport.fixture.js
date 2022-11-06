// List of all airport code , name, name and country
// Example: { code: 'LHR', name: 'London Heathrow', country: 'United Kingdom' }

/*
[
  { code: 'LHR', name: 'London Heathrow', country: 'United Kingdom' },
  { code: 'CDG', name: 'Charles de Gaulle', country: 'France' },
  { code: 'JFK', name: 'John F. Kennedy International', country: 'United States' },
  { code: 'HND', name: 'Tokyo Haneda', country: 'Japan' },
  { code: 'DXB', name: 'Dubai International', country: 'United Arab Emirates' },
  { code: 'AMS', name: 'Amsterdam Schiphol', country: 'Netherlands' },
  { code: 'FRA', name: 'Frankfurt am Main', country: 'Germany' },
  { code: 'PEK', name: 'Beijing Capital International', country: 'China' },
  { code: 'SIN', name: 'Singapore Changi', country: 'Singapore' },
  { code: 'LAX', name: 'Los Angeles International', country: 'United States' },
  { code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas', country: 'Spain' },
  { code: 'FCO', name: 'Leonardo da Vinci–Fiumicino', country: 'Italy' },
  { code: 'HKG', name: 'Hong Kong International', country: 'Hong Kong' },
  { code: 'ICN', name: 'Incheon International', country: 'South Korea' },
  { code: 'MUC', name: 'Franz Josef Strauss', country: 'Germany' },
  { code: 'ORD', name: "Chicago O'Hare International", country: 'United States' },
  { code: 'BKK', name: 'Suvarnabhumi', country: 'Thailand' },
  { code: 'DEL', name: 'Indira Gandhi International', country: 'India' },
  { code: 'PVG', name: 'Shanghai Pudong International', country: 'China' },
  { code: 'LGA', name: 'LaGuardia', country: 'United States' },
  { code: 'CAN', name: 'Guangzhou Baiyun International', country: 'China' },
  { code: 'SFO', name: 'San Francisco International', country: 'United States' },
  { code: 'IST', name: 'Istanbul Atatürk', country: 'Turkey' },
  { code: 'MIA', name: 'Miami International', country: 'United States' },
  { code: 'BOM', name: 'Chhatrapati Shivaji International', country: 'India' },
  { code: 'CTU', name: 'Chengdu Shuangliu International', country: 'China' },
    { code: 'SYD', name: 'Sydney Kingsford Smith', country: 'Australia' },
]
*/

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
};
