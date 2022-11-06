const mongoose = require('mongoose');
const config = require('../../src/config/config');

const setupTestDB = () => {
  // Before anything connect to db
  beforeAll(async () => {
    await mongoose.connect(config.mongoose.url, config.mongoose.options);
  });

  // Before each test clear db
  beforeEach(async () => {
    await Promise.all(Object.values(mongoose.connection.collections).map(async (collection) => collection.deleteMany()));
  });

  // After all tests disconnect from db
  afterAll(async () => {
    await mongoose.disconnect();
  });
};

module.exports = setupTestDB;
