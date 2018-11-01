'use strict';

import mongoose from 'mongoose';
import MongooseMemoryServer from 'mongodb-memory-server';
import supertest from 'supertest';

let mongoServer;

export default (server) => supertest(server);

export const startDB = async () => {
  mongoServer = new MongooseMemoryServer();
  const mongoUrl = await mongoServer.getConnectionString();
  await mongoose.connect(mongoUrl, (err) => {
    if (err) console.log(err);
  });
};

export const stopDB = () => {
  mongoose.disconnect();
  mongoServer.stop();
};