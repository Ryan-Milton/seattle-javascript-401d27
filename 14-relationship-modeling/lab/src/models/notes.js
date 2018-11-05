'use strict';

import mongoose from 'mongoose';

const schema = mongoose.Schema({
  title: { type:String, required:true },
  content: String,
  notebook: { type: mongoose.Schema.Types.ObjectId, ref:'Notebook' },
});

export default mongoose.model('notes', schema);