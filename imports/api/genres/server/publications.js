import { Meteor } from 'meteor/meteor';

import { Genres } from '../genres.js';

Meteor.publish('mainGenres', () => {
  return Genres.find({ byUser: false });
});

Meteor.publish('allGenres', () => {
  return Genres.find();
});
