'use strict';

import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: { type:String, required:true },
  content: String,
});

export default mongoose.model('notes', schema);