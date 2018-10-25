'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

router.routes = {};

const methods = ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'];

methods.forEach( (method) => {
  router.routes[method] = {};

  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };
});
console.log(router);
router.route = (request, response) => {
  console.log(`${request.method} ${request.url}`);

  return parser(request)
    .then( request => {
      let handler = router.routes[request.method][request.parsed.pathname];

      if(handler) {
        return handler(request, response);
      }
    })
    .catch(err => {
      console.log('NOT FOUND', request.parsed.pathname);
      response.status = 404;
      response.statusMessage = 'Not Found';
      response.write(`Resource Not Found (${request.parsed.pathname})`);
      response.end();
    });
};