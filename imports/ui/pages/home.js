import './home.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Games } from '../../api/games/games.js';

import './components/games-grid.js';

Template.Home_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('userData');
});

Template.Home_page.onRendered(() => {
  if ($(window).width() < 1080) {
    setCarouselHeightByRatio(['#myCarousel', '.carousel', '.carousel .item', '.carousel .item img'], 1.7818);
  }

  $(window).resize(() => {
    if ($(window).width() < 1080) {
      setCarouselHeightByRatio(['#myCarousel', '.carousel', '.carousel .item', '.carousel .item img'], 1.7818);
    }
  });
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
    return Meteor.user() && Games.find({ _id: { $in: Meteor.user().myList || [] } }, { sort: { createdAt: -1, views: -1},  limit: 8 })
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
    return Meteor.user() && Meteor.user().myList && Meteor.user().myList.length;
  }
});
