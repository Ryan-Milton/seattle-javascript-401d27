'use strict';

import { startDB, stopDB } from '../src/supergoose.js';

import Note from '../src/models/notes.js';

beforeAll(startDB);
afterAll(stopDB);

beforeEach( (done) => {
  Note.deleteMany({}).then(results => done());
});

describe('Notes Model', () => {

  it('should create', () => {
    let note = new Note({
      title: '#1',
    });
    expect(note.title).toBe('#1');
  });

  it('should save', (done) => {
    let note = new Note({
      title: '#1',
    });
    note.save().then(result => {
      expect(result._id).toEqual(note._id);
      done();
    });
  });
});