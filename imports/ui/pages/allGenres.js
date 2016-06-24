import './allGenres.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js';
import { Genres } from '../../api/genres/genres.js';

import '../components/games-grid.js';

Template.AllGenres_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('allGenres');

  Session.set('selectedGenre', 'Action');
});

Template.AllGenres_page.onRendered(() => {
  $('.genres-page').css('margin-top', $('#affixNav').height());
});

Template.AllGenres_page.helpers({
  genres() {
    return Genres.find({}, { sort: { name: 1 } });
  },
  games() {
    var selectedGenre = Session.get('selectedGenre');
    if (selectedGenre) {
      return Games.find({ genre: { $in: [selectedGenre.toLowerCase()] } });
    }
    else {
      return Games.find();
    }
  },
  columns () {
    return { lg: 'col-lg-4', md: 'col-md-6', sm: 'col-sm-12' }
  },
  isActive(index) {
    if (index === 0) {
      return 'active';
    }
  },
  genreTitle() {
    return Session.get('selectedGenre');
  },
  isNotLastGenre(index) {
    const genreCount = Genres.find().count();

    if (index !== (genreCount - 1)) {
      return '<div class="separator"></div>';
    }
  }
});

Template.AllGenres_page.events({
  'click .genre-list-item'(event) {
    event.preventDefault();

    const $target = $(event.target);

    $('.genre-list-anchor.active').removeClass('active');
    $target.parent().addClass('active');
    Session.set('selectedGenre', $target.text().trim());

    window.scroll(0, 0);
  }
});
