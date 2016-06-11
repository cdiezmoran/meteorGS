import './reviews.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { sAlert } from 'meteor/juliancwirko:s-alert';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';
import { Reviews } from '../../api/reviews/reviews.js';

import { insert } from '../../api/reviews/methods.js';
import { setElementHeightByRatio } from '../../startup/client/functions.js';
import { submitReview } from '../components/review-submit-form.js';

import '../components/review-item.js';
import '../components/review-submit-form.js';

Template.Reviews_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('reviews');
  Meteor.subscribe('developers');
});

Template.Reviews_page.onRendered(() => {
  $('.reviews-page').css('margin-top', $('#affixNav').height());

  $(window).resize(() => {
    setElementHeightByRatio('.review-game-img', 2);
  });

  const gameId = FlowRouter.getParam('gameId');
  const reviewCount = Reviews.find({ gameId: gameId }).count();

  if (reviewCount === 0) {
    $('.js-new-review').css('display', 'block');
    $('.js-show-review-form').text('Submit New Review');
  }
});

Template.Reviews_page.helpers({
  game() {
    const gameId = FlowRouter.getParam('gameId');
    return gameId && Games.findOne({ _id: gameId });
  },
  gameReviews() {
    const gameId = FlowRouter.getParam('gameId');
    return gameId && Reviews.find({ gameId: gameId }, { sort: { createdAt: -1 } });
  },
  developerNames(developerIds) {
    const developers = Developers.find({ _id: { $in: developerIds || [] } });
    var developerNamesString = '';
    developers.forEach((developer, index) => {
      developerNamesString += developer.name;
      if (developers.count() !== (index+1)) {
        developerNamesString += ', ';
      }
    });
    return developers && developerNamesString;
  },
  showGameRating(rating) {
    const fullStar = '<i class="fa fa-star" aria-hidden="true"></i>';
    const halfStar = '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
    const emptyStar = '<i class="fa fa-star-o" aria-hidden="true"></i>';

    var html;

    if (rating === 5) {
      html = fullStar + fullStar + fullStar + fullStar + fullStar;
    }
    else if (rating < 5 && rating > 4) {
      html = fullStar + fullStar + fullStar + fullStar + halfStar;
    }
    else if (rating === 4) {
      html = fullStar + fullStar + fullStar + fullStar + emptyStar;
    }
    else if (rating < 4 && rating > 3) {
      html = fullStar + fullStar + fullStar + halfStar + emptyStar;
    }
    else if (rating === 3) {
      html = fullStar + fullStar + fullStar + emptyStar + emptyStar;
    }
    else if(rating < 3 && rating > 2) {
      html = fullStar + fullStar + halfStar + emptyStar + emptyStar;
    }
    else if (rating === 2) {
      html = fullStar + fullStar + emptyStar + emptyStar + emptyStar;
    }
    else if (rating < 2 && rating > 1) {
      html = fullStar + halfStar + emptyStar + emptyStar + emptyStar;
    }
    else if (rating === 1) {
      html = fullStar + emptyStar + emptyStar + emptyStar + emptyStar;
    }
    else if (rating < 1 && rating > 0) {
      html = halfStar + emptyStar + emptyStar + emptyStar + emptyStar;
    }
    else {
      html = emptyStar + emptyStar + emptyStar + emptyStar + emptyStar;
    }

    if (rating % 1 !== 0) {
      html += ' ' + rating.toFixed(1) + '/5';
    }
    else {
      html += ' ' + rating + '/5';
    }
    return html;
  },
  userReview() {
    const gameId = FlowRouter.getParam('gameId');
    return Meteor.userId() && Reviews.findOne({ userId: Meteor.userId(), gameId: gameId });
  }
});

Template.Reviews_page.events({
  'click .js-show-review-form'(event, instance) {
    event.preventDefault();
    const reviewForm = $('.js-new-review');
    if (reviewForm.is(':hidden')) {
      $(event.target).text('Submit New Review');
      reviewForm.css('display', 'block');
    }
    else {
      //Submit the review
      submitReview();
    }
  },
  'click .close-submit'(event, instance) {
    event.preventDefault();
    $('.js-show-review-form').text('Create New Review');
    $('.js-new-review').css('display', 'none');
  }
});
