# Relationship Modeling

## Dependencies Required
* "babel-env": "^2.4.1",
* "babel-eslint": "^10.0.1",
* "babel-register": "^6.26.0",
* "cors": "^2.8.4",
* "dotenv": "^6.1.0",
* "express": "^4.16.4",
* "jest": "^23.6.0",
* "mongodb": "^3.1.8",
* "mongodb-memory-server": "^2.6.2",
* "mongoose": "^5.3.8",
* "require-dir": "^1.1.0",
* "superagent": "^4.0.0-beta.5",
* "supertest": "^3.3.0"

## Summary
This is a way to interact with an express server and store data made with the POST method into a Mongo Database for a model refering to many other models. You can also alter it with the PUT method and DELETE methods and retrieve with the GET method.

### Problems
* Current
  * I am unable to use any of the methods and I'm not sure why. I was trying to console log some data in the basic GET method but when I entered in the request url into postman or tried using HTTPie i would recieve a 404 error. I'm not too sure why but that's where I got.

* Previous
  * Make sure you are on the correct PORT or you will throw an error.