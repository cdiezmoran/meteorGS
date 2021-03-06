import './search.html'

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';

import { Games } from '../../api/games/games.js';

import '../components/games-grid.js';

Template.Search_page.onCreated(() => {
  Meteor.subscribe('games');
});

Template.Search_page.onRendered(() => {
  $('#search-box').focus();
  $('.search').css('padding-top', $('#affixNav').height());
});

Template.Search_page.helpers({
  getGames() {
    return GameSearch.getData({
      transform: (matchText, regExp) => {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {rating: -1}
    });
  },
  isLoading() {
    return GameSearch.getStatus().loading;
  },
  isSearchBoxEmpty() {
     return !$('#search-box').val();
  },
  columns () {
    return { lg: 'col-lg-3', md: 'col-md-4', sm: 'col-sm-6' }
  }
});
