const request = require('supertest');
const { faker } = require('@faker-js/faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupDB');
const { airportOne, airportTwo, airportThree, airportFour, insertAirports } = require('../fixtures/airport.fixture');

setupTestDB();

describe('Airport routes', () => {
  describe('POST /v1/airports', () => {
    let newAirport;

    beforeEach(async () => {
      newAirport = {
        airportCode: faker.random.alphaNumeric(3).toUpperCase(),
        airportName: faker.name.fullName(),
        city: faker.address.city(),
        country: faker.address.country(),
      };
    });

    test('should return 201 and successfully create new user if data is ok', async () => {
      const res = await request(app).post('/v1/airports').send(newAirport).expect(httpStatus.CREATED);

      // res.body needs to be an object with airportCode, airportName, city, country
      expect(res.body.data).toEqual({
        id: expect.anything(),
        airportCode: newAirport.airportCode,
        airportName: newAirport.airportName,
        city: newAirport.city,
        country: newAirport.country,
      });
    });

    test('should return 400 error if airportCode is empty', async () => {
      newAirport.airportCode = '';
      await request(app).post('/v1/airports').send(newAirport).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if airportCode is not 3 characters', async () => {
      newAirport.airportCode = 'AB';
      await request(app).post('/v1/airports').send(newAirport).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 if air port name is not a string', async () => {
      newAirport.airportName = 123;
      await request(app).post('/v1/airports').send(newAirport).expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('GET /v1/airports', () => {
    test('should return 200 and get all airports', async () => {
      await insertAirports([airportOne, airportTwo, airportThree, airportFour]);
      const res = await request(app).get('/v1/airports').send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        // data with object containing docs array , limit, page, totalPages, totalDocs
        data: expect.any(Object),
        success: true,
      });

      expect(res.body.data.limit).toBe(10);

      expect(res.body.data.docs.length).toBe(4);
    });
  });

  describe('GET /v1/airports/:airportId', () => {
    test('should return 200 and get airport if data is ok', async () => {
      await insertAirports([airportOne]);
      const res = await request(app).get(`/v1/airports/${airportOne._id}`).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        data: {
          id: expect.anything(),
          airportCode: airportOne.airportCode,
          airportName: airportOne.airportName,
          city: airportOne.city,
          country: airportOne.country,
        },
        success: true,
      });
    });
  });

  describe('PUT /v1/airports/:airportId', () => {
    test('should return 200 and successfully update airport if data is ok', async () => {
      await insertAirports([airportOne]);
      const res = await request(app)
        .put(`/v1/airports/${airportOne._id}`)
        .send({ airportName: 'new name' })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        data: {
          id: expect.anything(),
          airportCode: airportOne.airportCode,
          airportName: 'new name',
          city: airportOne.city,
          country: airportOne.country,
        },
        success: true,
      });
    });
  });

  describe('DELETE /v1/airports/:airportId', () => {
    test('should return 200 and successfully delete airport if data is ok', async () => {
      await insertAirports([airportOne]);
      const res = await request(app).delete(`/v1/airports/${airportOne._id}`).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        data: {
          id: expect.anything(),
          airportCode: airportOne.airportCode,
          airportName: airportOne.airportName,
          city: airportOne.city,
          country: airportOne.country,
        },
        success: true,
      });
    });
  });
});
