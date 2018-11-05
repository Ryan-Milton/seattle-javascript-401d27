'use strict';

import mongoose from 'mongoose';

const schema = mongoose.Schema({
  name: {type: String, require: true},
});

export default mongoose.model('Notebook', schema);