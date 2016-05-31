import './comment-item.html';

import { Template } from 'meteor/templating';

Template.Comment_comp.helpers({
  commentUsername(userId) {
    const user = Meteor.users.findOne({ _id: userId });
    return user && user.profile.firstName;
  },
  commentUserImg(userId) {
    const user = Meteor.users.findOne({ _id: userId });
    return user && user.profile.img;
  }
});
