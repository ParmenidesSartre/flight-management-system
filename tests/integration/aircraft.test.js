const request = require('supertest');
const { faker } = require('@faker-js/faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupDB');
const { aircraftOne, aircraftTwo, aircraftThree, aircraftFour, insertAircrafts } = require('../fixtures/aircraft.fixture');

setupTestDB();

describe('Aircraft creation', () => {
  describe('POST /v1/aircrafts', () => {
    let newAircraft;

    beforeEach(async () => {
      newAircraft = {
        aircraft: faker.name.fullName(),
        firstclass_seats: faker.datatype.number(),
        business_seats: faker.datatype.number(),
        economy_seats: faker.datatype.number(),
      };
    });

    test('should return 201 and successfully create new user if data is ok', async () => {
      const res = await request(app).post('/v1/aircrafts').send(newAircraft).expect(httpStatus.CREATED);

      expect(res.body.data).toEqual({
        id: expect.anything(),
        aircraft: newAircraft.aircraft,
        firstclass_seats: newAircraft.firstclass_seats,
        business_seats: newAircraft.business_seats,
        economy_seats: newAircraft.economy_seats,
      });
    });

    test('should return 400 error if aircraft name is empty', async () => {
      newAircraft.aircraft = '';
      await request(app).post('/v1/aircrafts').send(newAircraft).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if aircraft firstclass_seats is not a number', async () => {
      newAircraft.firstclass_seats = 'AB';
      await request(app).post('/v1/aircrafts').send(newAircraft).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if aircraft business seats is not a number', async () => {
      newAircraft.business_seats = 'AB';
      await request(app).post('/v1/aircrafts').send(newAircraft).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if aircraft economy seats is not a number', async () => {
      newAircraft.economy_seats = 'AB';
      await request(app).post('/v1/aircrafts').send(newAircraft).expect(httpStatus.BAD_REQUEST);
    });
  });

  describe('GET /v1/aircraft', () => {
    test('should return 200 and get all aircrafts', async () => {
      await insertAircrafts([aircraftOne, aircraftTwo, aircraftThree, aircraftFour]);
      const res = await request(app).get('/v1/aircrafts').send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        // data with object containing docs array , limit, page, totalPages, totalDocs
        data: expect.any(Object),
        success: true,
      });

      expect(res.body.data.limit).toBe(10);

      expect(res.body.data.docs.length).toBe(4);
    });
  });

  describe('GET /v1/aircraft/:aircraftId', () => {
    test('should return 200 and get aircraft if data is ok', async () => {
      await insertAircrafts([aircraftOne]);
      const res = await request(app).get(`/v1/aircrafts/${aircraftOne._id}`).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        data: {
          id: expect.anything(),
          aircraft: aircraftOne.aircraft,
          firstclass_seats: aircraftOne.firstclass_seats,
          business_seats: aircraftOne.business_seats,
          economy_seats: aircraftOne.economy_seats,
        },
        success: true,
      });
    });
  });

  describe('PUT /v1/aircrafts/:aircraftId', () => {
    test('should return 200 and successfully update aircraft if data is ok', async () => {
      await insertAircrafts([aircraftOne]);
      const res = await request(app)
        .put(`/v1/aircrafts/${aircraftOne._id}`)
        .send({ firstclass_seats: 100 })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        data: {
          id: expect.anything(),
          aircraft: aircraftOne.aircraft,
          firstclass_seats: 100,
          business_seats: aircraftOne.business_seats,
          economy_seats: aircraftOne.economy_seats,
        },
        success: true,
      });
    });
  });

  describe('DELETE /v1/aircrafts/:aircraftId', () => {
    test('should return 200 and successfully delete aircraft if data is ok', async () => {
      await insertAircrafts([aircraftOne]);
      const res = await request(app).delete(`/v1/aircrafts/${aircraftOne._id}`).send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        data: {
          id: expect.anything(),
          aircraft: aircraftOne.aircraft,
          firstclass_seats: aircraftOne.firstclass_seats,
          business_seats: aircraftOne.business_seats,
          economy_seats: aircraftOne.economy_seats,
        },
        success: true,
      });
    });
  });
});
