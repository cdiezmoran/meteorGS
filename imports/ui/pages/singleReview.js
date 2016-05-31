import './singleReview.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { sAlert } from 'meteor/juliancwirko:s-alert';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js';
import { Reviews } from '../../api/reviews/reviews.js';
import { Comments } from '../../api/comments/comments.js';

import { insert } from '../../api/comments/methods.js';

import './components/review-item.js';
import './components/comment-item.js';

Template.SingleReview_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('reviews');
  Meteor.subscribe('comments.inReview', FlowRouter.getParam('reviewId'));
  setElementHeightByRatio('.review-game-img', 2.25);
});

Template.SingleReview_page.onRendered(() => {
  $('.single-review-page').css('margin-top', $('#affixNav').height());
});

Template.SingleReview_page.helpers({
  singleReview() {
    return getReview();
  },
  game() {
    const review = getReview();
    return review && Games.findOne({ _id: review.gameId });
  },
  comments() {
    return Comments.find();
  }
});

Template.SingleReview_page.events({
  'click .js-post-comment'(event) {
    event.preventDefault();
    insertComment();
  },
  'submit .comment-form'(event) {
    event.preventDefault();
    insertComment();
  }
});

function insertComment() {
  const comment = $('[name=comment]').val().trim();

  sAlert.closeAll();
  if (comment.length === 0) {
    sAlert.error('Comment can\'t be empty');
    return;
  }

  insert.call({
    commentText: comment,
    reviewId: FlowRouter.getParam('reviewId')
  });

  $('[name=comment]').val('');
}

function getReview() {
  const reviewId = FlowRouter.getParam('reviewId');
  return reviewId && Reviews.findOne({ _id: reviewId });
}
