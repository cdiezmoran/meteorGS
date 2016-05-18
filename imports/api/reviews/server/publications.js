import { Meteor } from 'meteor/meteor';

import { Reviews } from '../reviews.js';

Meteor.publish('reviews', () => {
  return Reviews.find();
});
