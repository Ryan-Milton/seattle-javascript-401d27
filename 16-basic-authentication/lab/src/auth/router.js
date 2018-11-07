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

router.post('/signup', (request, response, next) => {
  let user = new User(request.body);
  user.save()
    .then((user) => {
      response.send(user.generateToken());
    }).catch(next);
});

router.post('/signin', auth, (request, response, next) => {
  response.cookie('Token', request.token);
  response.send(request.token);
});

export default router;