'use strict';

const storage = require('../storage/data-storage.js');
const uuid = require('uuid/v1');

class Note {
  constructor(config) {
    this.id = uuid();
    this.creationDate = new Date();
    this.title = config && config.title || '';
    this.content = config && config.content || '';
  }

  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }
}

module.exports = Note;