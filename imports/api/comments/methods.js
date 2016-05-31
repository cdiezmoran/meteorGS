import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Comments } from './comments.js';

export const insert = new ValidatedMethod({
  name: 'comments.insert',
  validate: new SimpleSchema({
    commentText: { type: String },
    reviewId: { type: String }
  }).validator(),
  run({ commentText, reviewId }) {
    const comment = {
      comment: commentText,
      reviewId,
      userId: this.userId,
      createdAt: new Date()
    }

    Comments.insert(comment);
  }
});
