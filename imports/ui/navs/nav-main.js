import './nav-main.html';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

Template.Main_nav.onRendered(function mainNavOnRender() {
  const myNav = $('#affixNav');
  myNav.affix({
    offset: {
      top: myNav.height()
    }
  });

  $('.vertical-separator').css('height', myNav.height()/2);
});

Template.Main_nav.helpers({
  emailLocalPart() {
    const email = Meteor.user().emails[0].address;
    return email.substring(0, email.indexOf('@'));
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
  "keyup #search-box": _.throttle((event) => {
      var text = $(event.target).val().trim();
      GameSearch.search(text);
    }, 200)
});
