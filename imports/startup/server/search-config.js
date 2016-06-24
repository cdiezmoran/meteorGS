import { SearchSource } from 'meteor/meteorhacks:search-source';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

SearchSource.defineSource('Games', (searchText, options) => {
  var options = {sort: {rating: -1}/*, limit: 20*/};

  if(searchText) {
    var regExp = new RegExp("(" + searchText.trim() + ")", "ig");
    var selector = {$or: [
      { name: regExp },
    ]};

    return Games.find(selector, options).fetch();
  } else {
    return Games.find({}, options).fetch();
  }
});
