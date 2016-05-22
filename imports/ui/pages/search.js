import './search.html'

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Template.Search_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
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
  gameDeveloperName(developerId) {
    return Developers.findOne({ _id: developerId }).name;
  },
  isSearchBoxEmpty() {
     return !$('#search-box').val();
  }
});

Template.Search_page.events({

});
