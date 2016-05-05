import { Meteor } from 'meteor/meteor';

import { Games } from '../games.js';

Meteor.publish('games', function gamesPublication() {
  return Games.find();
});
