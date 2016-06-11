import './review-item.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { updateLikeCount } from '../../api/reviews/methods.js';

Template.Review_comp.onCreated(() => {
  Meteor.subscribe('userData');
});

Template.Review_comp.helpers({
  reviewUsername(userId) {
    const user = Meteor.users.findOne({ _id: userId });
    return user && user.profile.name.split(" ")[0];
  },
  reviewUserImg(userId) {
    const user = Meteor.users.findOne({ _id: userId });
    return user && user.profile.img;
  },
  showRating(rating) {
    const fullStar = '<i class="fa fa-star" aria-hidden="true"></i>';
    const emptyStar = '<i class="fa fa-star-o" aria-hidden="true"></i>';
    var html = '';

    for (var i = 0; i < rating; i++) {
      html += fullStar;
    }

    for (var i = 0; i < (5-rating); i++) {
      html += emptyStar;
    }

    return html;
  },
  isLiked(likedBy) {
    return _.contains(likedBy, Meteor.userId());
  },
  isDisliked(dislikedBy) {
    return _.contains(dislikedBy, Meteor.userId());
  }
});

Template.Review_comp.events({
  'click .like-button'(event, instance){
    event.preventDefault();

    updateLikeCount.call({
      reviewId: this.review._id,
      isLike: true
    });
  },
  'click .dislike-button'(event, instance) {
    event.preventDefault();

    updateLikeCount.call({
      reviewId: this.review._id,
      isLike: false
    });
  }
});
