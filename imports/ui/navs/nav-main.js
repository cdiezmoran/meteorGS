import './nav-main.html';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

Template.Main_nav.onRendered(function mainNavOnRender() {
  const myNav = $('#affixNav');
  myNav.affix({
    offset: {
      top: myNav.height()
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
