import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Genres = new Mongo.Collection('Genres');

Genres.schema = new SimpleSchema({
  name: { type: String },
  byUser: { type: Boolean }
});

Genres.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});
