import { Meteor } from 'meteor/meteor';

import { Comments } from '../comments.js';

Meteor.publish('comments.inReview', (reviewId) => {
  return Comments.find({ reviewId });
});
