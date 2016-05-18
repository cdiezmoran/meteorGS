import './game.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';
import { Reviews } from '../../api/reviews/reviews.js';

import { updateLikeCount } from '../../api/reviews/methods.js';

Template.Game_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
  Meteor.subscribe('reviews');
});

Template.Game_page.onRendered(() => {
  $('.game-container').css('padding-top', $('#affixNav').height());
  $('#gameGalleryCarousel').carousel({interval: false});
});

Template.Game_page.helpers({
  game() {
    return getGame();
  },
  developer() {
    const game = getGame();
    return Developers.findOne({ _id: game.developerId });
  },
  imagesAndVideos() {
    const game = getGame();
    return game.videoLinks.concat(game.galleryLinks);
  },
  galleryImages() {
    const game = getGame();
    return game.galleryLinks;
  },
  videoLinks() {
    const game = getGame();
    return game.videoLinks;
  },
  isActive(index) {
    if (index === 0) {
      return 'active';
    }
  },
  gameReviews() {
    const game = getGame();
    return Reviews.find({ gameId: game._id }, { sort: { createdAt: -1 }, limit: 5 });
  },
  reviewCount() {
    const game = getGame();
    return Reviews.find({ gameId: game._id }).count();
  }
});

function getGame() {
  const gameId = FlowRouter.getParam('_id');
  return Games.findOne({ _id: gameId });
}

Template.review.helpers({
  reviewUsername(userId) {
    return Meteor.users.findOne({ _id: userId }).profile.firstName;
  },
  reviewUserImg(userId) {
    return Meteor.users.findOne({ _id: userId }).profile.img;
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

Template.review.events({
  'click .like-button'(event, instance){
    event.preventDefault();

    updateLikeCount.call({
      reviewId: this._id,
      isLike: true
    });
  },
  'click .dislike-button'(event, instance) {
    event.preventDefault();

    updateLikeCount.call({
      reviewId: this._id,
      isLike: false
    });
  }
});
