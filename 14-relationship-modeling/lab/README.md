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
This is a lab to connect one "collection" in a database and be able to point it to another "collection" in the same database.

### Testing
* The first set of tests
  * Using promise handling
    * Tests that the note and notebook are related
    * Tests the note is related to the notebook by populating the notebook reference inside the note.
* The second set of tests
  * Using async/await
    * Tests a notebook is created
    * Tests a notebook is created via populate()
    * Tests the creation of a note (no reference)
    * Tests the relation between a note and notebook
    with populate()
    * Tests the relation between many notes and one notebook with populate()