'use strict';

import express from 'express';

import notes from '../models/notes.js';
// import { request } from 'http';

const router = express.Router();

let sendJSON = (data, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

router.get('/api/v1/notes', (request,  response, next) => {
  notes.find()
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.get('/api/v1/notes/:id', (request,  response, next) => {
  notes.findById(request.params.id)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

// router.get('/api/v1/notes', (request, response, next) => {
//   console.log(response);
//   const criteria = {key: '???'};
//   notes.find(criteria)
//     .then( data => {
//       const output = {key: '???'};
//       sendJSON(output, response);
//     })
//     .catch( next );
// });

router.post('/api/v1/notes', (request, response, next) => {
  const body = request.body;
  notes.create(body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.put('/api/v1/notes/:id', (request, response, next) => {
  request.body._id = request.params.id;
  notes.findByIdAndUpdate( request.params.id, request.body )
    .then( result => sendJSON(result, response) )
    .catch( next );
});

router.patch('/api/v1/notes/:id', (request, response, next) => {
  notes.findByIdAndUpdate( request.params.id, request.body )
    .then( result => sendJSON(result, response) )
    .catch( next);
});

router.delete('/api/v1/notes/:id', (request, response, next) => {
  notes.findByIdAndDelete(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch(next);
});

export default router;