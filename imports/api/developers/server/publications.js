import { Meteor } from 'meteor/meteor';

import { Developers } from '../developers.js';

Meteor.publish('developers', function developersPublication() {
  return Developers.find();
});
