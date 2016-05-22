import './myList.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Template.MyList_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
  Meteor.subscribe('userData');
});

Template.MyList_page.onRendered(() => {
  setElementHeightByRatio('.img-responsive.home', 2.12);

  $(window).resize(() => {
    setElementHeightByRatio('.img-responsive.home', 2.12);
  });
});

Template.MyList_page.helpers({
  myListGames() {
    return Games.find({ _id: { $in: Meteor.user().myList } }, { sort: { createdAt: -1},  limit: 8 });
  },
  gameDeveloperName(developerId) {
    return Developers.findOne({ _id: developerId }).name;
  }
});
