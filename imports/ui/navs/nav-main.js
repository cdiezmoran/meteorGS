import './nav-main.html';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

Template.Main_nav.onRendered(function mainNavOnRender() {
  var height;
  if ($('.header-for-nav').length === 1) {
    height = $('.header-for-nav').height();
  }
  else {
    height = $('#affixNav').height();
  }

  $('#affixNav').affix({
    offset: {
      top: height
    }
  });
});

Template.Main_nav.helpers({
  emailLocalPart() {
    const email = Meteor.user().emails[0].address;
    return email.substring(0, email.indexOf('@'));
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
  }
});
