'use strict';

const router = require('../lib/router.js');

router.get('/api/v1/notes', (request, response) => {
  //http://localhost:3000/?name=<YOUR_NAME_HERE>
  response.statusCode = 200;
  response.statusMessage = 'OK';
  let name = request.query.name || '';
  response.write(`Hello ${name}`);
  response.end();
});

router.post('/api/v1/notes', (request, response) => {
  //http://localhost:3000/data
  //don't forget to add JSON in te Body.raw section of Postman
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write( JSON.stringify(request.body) );
  response.end();
});

router.put('/data/update', (request, response) => {
  //http://localhost:3000/update?id=<ID_HERE>
  response.statusCode = 200;
  response.statusMessage = 'OK';
  // let id = request.query.id || '';
  response.write( JSON.stringify(request.body) );
  response.end();
});

module.exports = {};