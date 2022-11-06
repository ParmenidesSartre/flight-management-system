const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAirport = {
  body: Joi.object().keys({
    airportCode: Joi.string().required(),
    airportName: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }),
};

const getAirports = {
  query: Joi.object().keys({
    code: Joi.string(),
    name: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAirport = {
  params: Joi.object().keys({
    airport_id: Joi.string().custom(objectId),
  }),
};

const updateAirport = {
  params: Joi.object().keys({
    airport_id: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      airportName: Joi.string(),
      airportCode: Joi.string(),
      city: Joi.string(),
      country: Joi.string(),
    })
    .min(1),
};

const deleteAirport = {
  params: Joi.object().keys({
    airport_id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  updateAirport,
  deleteAirport,
};
