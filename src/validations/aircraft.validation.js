const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAicraft = {
  body: Joi.object().keys({
    aircraft: Joi.string().required(),
    firstclass_seats: Joi.number().required(),
    business_seats: Joi.number().required(),
    economy_seats: Joi.number().required(),
  }),
};

const getAircrafts = {
  query: Joi.object().keys({
    aircraft: Joi.string(),
    firstclass_seats: Joi.number().integer(),
    business_seats: Joi.number().integer(),
    economy_seats: Joi.number().integer(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAircraftById = {
  params: Joi.object().keys({
    aircraftId: Joi.string().custom(objectId),
  }),
};

const updateAircraft = {
  params: Joi.object().keys({
    aircraftId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    aircraft: Joi.string(),
    firstclass_seats: Joi.number(),
    business_seats: Joi.number(),
    economy_seats: Joi.number(),
  }),
};

const deleteAircraft = {
  params: Joi.object().keys({
    aircraftId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAicraft,
  getAircrafts,
  getAircraftById,
  updateAircraft,
  deleteAircraft,
};
