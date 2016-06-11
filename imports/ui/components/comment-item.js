import './comment-item.html';

import { Template } from 'meteor/templating';
import { moment } from 'meteor/momentjs:moment';

Template.Comment_comp.helpers({
  commentUsername(userId) {
    const user = Meteor.users.findOne({ _id: userId });
    const separatedName = user.profile.name.split(" ");

    return user && separatedName[0];
  },
  commentUserImg(userId) {
    const user = Meteor.users.findOne({ _id: userId });
    return user && user.profile.img;
  },
  formatDate(date) {
    return moment(date).fromNow();
  }
});
