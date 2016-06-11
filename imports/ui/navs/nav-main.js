import './nav-main.html';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import { Genres } from '../../api/genres/genres.js';

Template.Main_nav.onCreated(() => {
  Meteor.subscribe('mainGenres');
});

Template.Main_nav.onRendered(() => {
  const myNav = $('#affixNav');
  myNav.affix({
    offset: {
      top: myNav.height()
    }
  });

  $('.vertical-separator').css('height', myNav.height()/2);
});

Template.Main_nav.helpers({
  userFirstName() {
    const user = Meteor.user();
    return user && user.profile.name.split(" ")[0];
  },
  genres() {
    return Genres.find();
  },
  gameDropdownTitle() {
    var routeName = FlowRouter.getRouteName();

    if (routeName === 'Genre.show') {
      var genre = FlowRouter.getParam('genre').toLowerCase();
      if (genre.length <= 3) {
        return genre.toUpperCase();
      }
      return genre.charAt(0).toUpperCase() + genre.slice(1);
    }
    else if (routeName === 'User.list') {
      return 'Your List';
    }
    else {
      return 'Games';
    }
  },
  isSearchRoute() {
    var routeName = FlowRouter.getRouteName();

    return routeName === 'App.search';
  }
});

Template.Main_nav.events({
  'click .js-signout'(event, instance) {
    event.preventDefault();
    Meteor.logout((error) => {
      if (!error) {
        FlowRouter.go('App.start');
      }
    });
  },
  'click .dropdown'(event, instance) {
    const icon = $(event.target.firstElementChild);
    if (icon.hasClass('fa-rotate-180')) {
      icon.removeClass('fa-rotate-180');
    }
    else {
      icon.addClass('fa-rotate-180');
    }
  },
  'blur .dropdown'(event, instance) {
    $(event.target.firstElementChild).removeClass('fa-rotate-180');
  },
  "keyup #search-box": _.throttle((event) => {
      var text = $(event.target).val().trim();
      GameSearch.search(text);
    }, 200)
});
