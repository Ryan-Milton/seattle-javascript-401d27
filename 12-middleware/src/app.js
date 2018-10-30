'use strict';

const debug = require('debug')('app');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './api/api.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

let corsOptions = {
  origin: 'http://example.com',
};
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(router);

app.use(notFound);

app.use(errorHandler);

let isRunning = false;

module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        console.log('Server is up on port', port);
        debug('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
      debug('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};