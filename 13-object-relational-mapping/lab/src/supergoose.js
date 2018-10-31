'use strict';

import mongoose from 'mongoose';
import MongooseMemoryServer from 'mongodb-memory-server';
import supertest from 'supertest';

let mongoServer;

export default (server) => supertest(server);

export const startDB = async () => {
  mongoServer = new MongooseMemoryServer();
  const mongoUrl = 
}