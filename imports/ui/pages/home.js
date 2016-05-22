import './home.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Template.Home_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
  Meteor.subscribe('userData');
});

Template.Home_page.helpers({
  gamesAddedRecently() {
    return Games.find({}, { sort: { createdAt: -1 }, limit: 3 });
  },
  isActive(index) {
    if (index === 0) {
      return 'active';
    }
  },
  genres() {
    return [
      'Action',
      'Simulation',
      'Shooter',
      'RPG',
      'Indie',
      'Adventure'
    ];
  },
  gamesByGenre(genre) {
    genre = genre.toLowerCase();
    return Games.find({ genre: { $in: [genre] } }, { sort: { createdAt: -1, views: -1}, limit: 8 });
  },
  myListGames() {
    return Games.find({ _id: { $in: Meteor.user().myList } }, { sort: { createdAt: -1, views: -1},  limit: 8 })
  },
  isFirstGenre(index) {
    return index === 0;
  },
  isEven(index) {
    return (index % 2) === 0 || index === 0;
  },
  gameCount(genre) {
    genre = genre.toLowerCase();
    return Games.find({ genre: { $in: [genre] } }).count();
  },
  myListCount() {
    return Meteor.user().myList.length;
  }
});

Template.games.onRendered(() => {
  setElementHeightByRatio('.img-responsive.home', 2.12);

  $(window).resize(() => {
    setElementHeightByRatio('.img-responsive.home', 2.12);
  });
});

Template.games.helpers({
  gameDeveloperName(developerId) {
    return Developers.findOne({ _id: developerId }).name;
  }
});
