'use strict';

import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const schema = new Schema({
  username: {type: String, required: true, unique: true},
  // email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

// ---------------- I don't understand the .pre method ----------------------

// schema.pre('save', async function() {
//   this.password = await bcrypt.hash(this.password, 10, function(err, hash) {
//     console.log(hash);
//   });
// });

schema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch( error => { throw error; } );
});
// ------------ Found a tutorial and am trying to following it ----------------------

schema.statics.authenticate = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

schema.methods.generateHash = function(password) {
  return bcrypt.hash(password, 10);
};

// Generate a JWT from the user id and a secret
schema.methods.generateToken = function() {
  return jwt.sign( {id:this._id}, process.env.APP_SECRET);
};

// Compare a plain text password against the hashed one we have saved
schema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

// If we got a user/password, compare them to the hashed password
// If we got a token, validate it and then pull the user id
// In both cases, return the user instance or an error


export default mongoose.model('users', schema);