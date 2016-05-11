import { Meteor } from 'meteor/meteor';

import { Developers } from '../developers.js';

Meteor.publish('developers', () => {
  return Developers.find();
});
