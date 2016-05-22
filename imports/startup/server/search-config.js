import { SearchSource } from 'meteor/meteorhacks:search-source';

import { Games } from '../../api/games/games.js';

SearchSource.defineSource('Games', (searchText, options) => {
  var options = {sort: {rating: -1}/*, limit: 20*/};

  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {name: regExp},
    ]};

    return Games.find(selector, options).fetch();
  } else {
    return Games.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
