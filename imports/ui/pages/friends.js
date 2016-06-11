import './friends.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../components/friend-item.js';

Template.Friends_page.onCreated(() => {
  Meteor.subscribe('userData');
});

Template.Friends_page.onRendered(() => {
  $('.friends-page').css('margin-top', $('#affixNav').height());
});

Template.Friends_page.helpers({
  friends() {
    const user = Meteor.user();
    return user && Meteor.users.find({ _id: { $in: user.friendsList || [] } }, { sort: { status: -1 } });
  }
});
