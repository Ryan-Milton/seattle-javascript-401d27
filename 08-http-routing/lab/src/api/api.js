'use strict';

const router = require('../lib/router.js');

router.get('/', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  let name = request.query.name || '';
  response.write(`Hello ${name}`);
  response.end();
});

router.post('/data', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write( JSON.stringify(request.body) );
  response.end();
});

module.exports = {};