import './review-submit-form.html';

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { insert } from '../../api/reviews/methods.js';

Template.Review_submit_form.events({
  'click .star'(event, instance) {
    event.preventDefault();
    var rating = $(event.target).parent().prevAll().length + 1;
    Session.set('newReviewRating', rating);

    $(event.target).removeClass('fa-star-o').addClass('fa-star');
    $(event.target).parent().prevAll().children().removeClass('fa-star-o').addClass('fa-star');
    $(event.target).parent().nextAll().children().removeClass('fa-star').addClass('fa-star-o');
  },
  'submit .js-new-review'(event, instance) {
    event.preventDefault();
    submitReview();
  }
});

export const submitReview = () => {
  const gameId = FlowRouter.getParam('gameId');
  const title = $('[name=title]').val().trim();
  const content = $('[name=content]').val().trim();
  const rating = Session.get('newReviewRating');

  sAlert.closeAll();
  if (title.length === 0) {
    sAlert.error('Please add a title for your review.');
    return;
  }

  if (content.length < 500) {
    sAlert.error('Your review must be at least 500 characters long.');
    return;
  }

  if (!rating || rating === 0) {
    sAlert.error('Please rate the game to submit your review.');
    return;
  }

  insert.call({
    gameId,
    title,
    content,
    rating
  });

  Session.set('newReviewRating', 0);
  $('.star').children().removeClass('fa-star').addClass('fa-star-o');
  $('[name=content]').val('');
  $('[name=title]').val('');
  $('.js-new-review').css('display', 'none');
}
