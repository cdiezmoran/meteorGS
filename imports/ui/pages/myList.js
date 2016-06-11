import './myList.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Games } from '../../api/games/games.js';

import '../components/games-grid.js';

Template.MyList_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('userData');
});

Template.MyList_page.onRendered(() => {
  $('.myList').css('margin-top', $('#affixNav').height());
});

Template.MyList_page.helpers({
  myListGames() {
    return Meteor.user() && Games.find({ _id: { $in: Meteor.user().myList || []} }, { sort: { createdAt: -1},  limit: 8 });
  }
});
