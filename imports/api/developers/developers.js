import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Developers = new Mongo.Collection('developers');

const contactInfoSchema = new SimpleSchema({
  twitter: {
    type: String,
    optional: true
  },
  facebook: {
    type: String,
    optional: true
  },
  mail: {
    type: String,
    optional: true
  },
  address: {
    type: String,
    optional: true
  }
});

Developers.schema = new SimpleSchema({
  name: {type: String},
  description: {type: String},
  contactInfo: {
    type: contactInfoSchema,
    optional: true
  }
});
