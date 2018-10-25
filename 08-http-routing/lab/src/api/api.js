'use strict';

const router = require('../lib/router.js');

router.get('/api/v1/notes', (request, response) => {
  //http://localhost:3000/api/v1/notes?name=<YOUR_NAME_HERE>
  response.statusCode = 200;
  response.statusMessage = 'OK';
  let name = request.query.name || '';
  response.write(`Hello ${name}`);
  response.end();
});

router.post('/api/v1/notes', (request, response) => {
  //http://localhost:3000/api/v1/notes
  //don't forget to add JSON in te Body.raw section of Postman
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.write( JSON.stringify(request.body) );
  response.end();
});

router.put('/api/v1/notes', (request, response) => {
  //http://localhost:3000/api/v1/notes?id=<ID_HERE>
  response.statusCode = 200;
  response.statusMessage = 'OK';
  let id = request.query.id || '';
  response.write( `ID: ${id} was requested.` );
  response.end();
});

router.delete('/api/v1/notes', (request, response) => {
  ////http://localhost:3000/api/v1/notes?id=<ID_HERE>
  response.statusCode = 200;
  response.statusMessage = 'OK';
  let id = request.query.id || '';
  response.write( `ID: ${id} was deleted.`);
  response.end();
});

module.exports = {};