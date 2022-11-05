const { faker } = require('@faker-js/faker');
const { Airport } = require('../../../src/models');

describe('Airport model', () => {
  describe('Airport validation', () => {
    let newAirport;
    beforeEach(() => {
      newAirport = {
        airportCode: faker.random.alphaNumeric(3),
        airportName: faker.address.city(),
        city: faker.address.city(),
        country: faker.address.country(),
      };
    });

    test('should correctly validate a valid airport', async () => {
      await expect(new Airport(newAirport).validate()).resolves.toBeUndefined();
    });

    test('should throw a validation error if airportCode is empty', async () => {
      newAirport.airportCode = '';
      await expect(new Airport(newAirport).validate()).rejects.toThrow();
    });

    test('should throw a validation error if airportCode is not 3 characters', async () => {
      newAirport.airportCode = '1234';
      await expect(new Airport(newAirport).validate()).rejects.toThrow();
    });

    test('should throw a validation error if city is empty', async () => {
      newAirport.city = '';
      await expect(new Airport(newAirport).validate()).rejects.toThrow();
    });

    test('should throw a validation error if country is empty', async () => {
      newAirport.country = '';
      await expect(new Airport(newAirport).validate()).rejects.toThrow();
    });

    test('should return uppercase version of airportCode', async () => {
      newAirport.airportCode = 'abc';
      const airport = new Airport(newAirport);
      await airport.validate();
      expect(airport.airportCode).toBe('ABC');
    });
  });
});
