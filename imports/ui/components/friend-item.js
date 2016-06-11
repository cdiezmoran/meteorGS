import './friend-item.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.Friend_comp.helpers({
  isOnline() {
    return this.friend && this.friend.status.online;
  }
});
