'use strict';

require('dotenv').config();

const server = require('./lib/app.js');

server.start( process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));