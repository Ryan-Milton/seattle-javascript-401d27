// import express from 'express';
// import User from './model.js';

// const router = express.Router();

// router.get('/signin', (request, response) => {
//   response.send('token coming soon');
// });

// router.post('/signup', async (request, response) => {

//   try {

//     const user = await User.create(request.body);
    
//     const token = user.generateToken();
    
//     response.send(token);

//   } catch (error) {

//     response.sendStatus(400);
//   }
// });

// router.get('/ping', (request, response) => {
//   response.send('pong');
// });

// export default router;

import express from 'express';
import User from './model.js';
import auth from './middleware.js';

const router = express.Router();

let sendJSON = (data, response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

router.get('/signin', auth, (request, response, next) => {
  console.log('in the get');
  User.find()
    .then( result => sendJSON(result, response) )
    .catch(next);
  response.send(auth);
});

router.post('/signup', async (request, response) => {

  try {
    const body = request.body;
    // create the user with posted info
    User.create(body)
      .then( result => sendJSON(result, response) );
    // make a token unique to the user
    
    // respond with the token

  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;