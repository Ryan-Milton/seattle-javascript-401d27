'use strict';

import { startDB, stopDB } from '../src/supergoose.js';

import Note from '../src/models/notes.js';
import Notebook from '../src/models/notebook.js';

beforeAll(startDB);
afterAll(stopDB);

beforeEach( (done) => {
  Note.deleteMany({}).then(results => done());
  Notebook.deleteMany({}).then(results => done());
});

describe('Testing Relations', () => {

  it('should be related', (done) => {
  
    Notebook.create({name:'Test NoteBook #1'}).then(booknote => {
      Note.create({title:'Test Relationship #1', content:'Are we related?', notebook:booknote }).then((note) => {
        expect(note.notebook).toBe(booknote);
        done();
      });
    });
  });

  it('should be related *populate()*', async () => {
    const notebook = await Notebook.create({name:'Test NoteBook #2'});

    const note = await Note.create({title:'Test Relationship #2', content:'Relations?', notebook:notebook});

    // expect(notebook._id).toBe('???');
    expect(note.notebook._id).toBe(notebook._id);
    expect(note.populate('notebook').notebook.name).toBe('Test NoteBook #2');
  });
});

describe('Making Relations', () => {
  
  it('should create a Notebook',async  () => {
    const notebook = await new Notebook({name:'Test Notbook'});
    expect(notebook).toBeDefined();
  });

  it('should create and populate a new Notebook', async () => {
    const notebook = await new Notebook({name:'Populate Notebook'});

    expect(notebook.populate('notebook').name).toBe('Populate Notebook');
  });

  it('should creat a Note', async () => {
    const note = await new Note({title:'I\'m a Note', content:'I\'m the Notes content'});

    expect(note.content).toBe('I\'m the Notes content');
  });

  it('should create a Note refering to a Notebook', async () => {
    const notebook = await new Notebook({name:'Take Notes'});
    const note = await new Note({title:'Took a note', content:'I\'m the note', notebook:notebook});

    expect(note.populate('notebook').notebook.name).toBe('Take Notes');
  });

  it('should create a many Notes refering to one Notebook', async () => {
    const notebook = await new Notebook({name:'Take Notes'});
    const note1 = await new Note({title:'Took a note', content:'I\'m the first note', notebook:notebook});
    const note2 = await new Note({title:'Took a note', content:'I\'m the second note', notebook:notebook});
    const note3 = await new Note({title:'Took a note', content:'I\'m the third note', notebook:notebook});

    expect(note1.populate('notebook').notebook.name).toBe('Take Notes');
    expect(note2.populate('notebook').notebook.name).toBe('Take Notes');
    expect(note3.populate('notebook').notebook.name).toBe('Take Notes');
  });
});