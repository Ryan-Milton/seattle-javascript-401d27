'use strict';

const http = require('http');

const parser = require('./parser.js');

const cowsay = require('cowsay');

const requestHandler = (request, response) => {
  console.log(`${request.method} ${request.url}`);

  parser(request)
    .then( request => {
      if( request.method === 'GET' && request.parsed.pathname === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;
        response.statusMeassge = 'OK';
        response.write(`<!DOCTYPE html>
        <html>
          <head>
            <title> cowsay </title>  
          </head>
          <body>
           <header>
             <nav>
               <ul> 
                 <li><a href="/cowsay">cowsay</a></li>
               </ul>
             </nav>
           <header>
           <main>
             <!-- project description -->
           </main>
          </body>
        </html>`);
        response.end();
        return;
      }

      else if( request.method === 'GET' && request.parsed.pathname === '/cowsay') {
        
        response.write(`<!DOCTYPE html>
       <html>
         <head>
           <title> cowsay </title>  
         </head>
         <body>
           <h1> cowsay </h1>
           <pre>
             ${cowsay.say({text: request.query.text, f: 'dragon'})}
           </pre>
         </body>
       </html>`);

        response.end();
        return;
      }

      else if(request.method === 'POST' && request.parsed.pathname == '/data') {
        response.setHeader('Content-Type', 'text/json');
        response.statusCode = 200;
        response.statusMeassge = 'OK';
        response.write(JSON.stringify(request.body));
        response.end();
        return;
      }

      else if(request.method === 'POST' && request.parsed.pathname === '/api/cowsay') {

        let cowSaid = cowsay.say({text: request.body.text});

        response.write(JSON.stringify({content: cowSaid}));

        response.end();
      }

      else {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 404;
        response.statusMeassge = 'Not Found';
        response.write('Resource Not Found');
        response.end();
      }
    })
    .catch(err => {
      response.writeHead(500);
      response.write(err);
      response.end();
    });
};

const app = http.createServer(requestHandler);

module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};