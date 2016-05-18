import { Meteor } from 'meteor/meteor';
import { SearchSource } from 'meteor/meteorhacks:search-source';

import { Games } from '../../api/games/games.js';

var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['name'];

GameSearch = new SearchSource('Games', fields, options);
