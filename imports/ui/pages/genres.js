import './genres.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Template.Genres_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
});

Template.Genres_page.onRendered(() => {
  $('.genres-dropdown').css('padding-top', $('#affixNav').height());
});

Template.Genres_page.helpers({
  genreTitle() {
    const genre = FlowRouter.getParam('genre').toLowerCase();
    if (genre.length <= 3) {
      return genre.toUpperCase();
    }
    return genre.charAt(0).toUpperCase() + genre.slice(1);
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
  genreGames() {
    const genre = FlowRouter.getParam('genre').toLowerCase();
    return Games.find({ genre: { $in: [genre] } }, { sort: { createdAt: -1, views: -1 } });
  },
  gameDeveloperName(developerId) {
    return Developers.findOne({ _id: developerId }).name;
  }
});
