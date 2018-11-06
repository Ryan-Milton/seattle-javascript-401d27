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

router.get('/signin', auth, (request, response) => {
  response.send('where can the token be?');
});

router.post('/signup', async (request, response) => {

  try {

    // create the user with posted info

    // make a token unique to the user
    
    // respond with the token

  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;