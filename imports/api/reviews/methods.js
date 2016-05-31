import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

import { Reviews } from './reviews.js';

export const insert = new ValidatedMethod({
  name: 'insert.review',
  validate: new SimpleSchema({
    gameId: { type: String },
    title: { type: String },
    content: { type: String },
    rating: { type: Number }
  }).validator(),
  run({ gameId, title, content, rating }) {
    const review = {
      gameId,
      title,
      content,
      rating,
      createdAt: new Date(),
      userId: this.userId,
      likeCount: 0,
      dislikeCount: 0
    }

    Reviews.insert(review);
  }
});

export const updateLikeCount = new ValidatedMethod({
  name: 'reviews.updateLikeCount',
  validate: new SimpleSchema({
    reviewId: { type: String },
    isLike: { type: Boolean }
  }).validator(),
  run({ reviewId, isLike }) {
    const review = Reviews.findOne(reviewId);
    var newLikeCount;
    var newDislikeCount;

    if (!_.contains(review.likedBy, this.userId) && !_.contains(review.dislikedBy, this.userId)) {
      if (isLike) {
        newLikeCount = review.likeCount + 1;
        Reviews.update(reviewId, { $set: { likeCount: newLikeCount }, $push: { likedBy: this.userId } });
      }
      else {
        newDislikeCount = review.dislikeCount + 1;
        Reviews.update(reviewId, { $set: { dislikeCount: newDislikeCount }, $push: { dislikedBy: this.userId } });
      }
    }
    else if (_.contains(review.likedBy, this.userId) && !_.contains(review.dislikedBy, this.userId)) {
      newLikeCount = review.likeCount - 1;
      if (isLike) {
        //Review is liked and user clicked like
        //Reduce likeCount by one and remove user from likedBy list
        Reviews.update(reviewId,
          {
            $set: { likeCount: newLikeCount },
            $pull: { likedBy: this.userId }
          });
      }
      else {
        //Review is liked and user clicked dislike
        //Reduce likeCount by one, increase dislikeCount by one
        //Remove user from likedBy list and add him to dilikedBy list
        newDislikeCount = review.dislikeCount + 1;
        Reviews.update(reviewId,
          {
            $set: { likeCount: newLikeCount, dislikeCount: newDislikeCount },
            $pull: { likedBy: this.userId },
            $push: { dislikedBy: this.userId }
          });
      }
    }
    else if (!_.contains(review.likedBy, this.userId) && _.contains(review.dislikedBy, this.userId)) {
      newDislikeCount = review.dislikeCount - 1;
      if (isLike) {
        //Review is disliked and user clicked like
        //Increase likeCount and reduce dislikeCount by one
        //Remove user from dislikedBy and add him to likedBy
        newLikeCount = review.likeCount + 1;
        Reviews.update(reviewId,
          {
            $set: { likeCount: newLikeCount, dislikeCount: newDislikeCount },
            $pull: { dislikedBy: this.userId },
            $push: { likedBy: this.userId }
          });
      }
      else {
        //Review is disliked and user clicked dislike
        //Reduce dislikeCount by one and remove user from dislikedBy list
        Reviews.update(reviewId,
          {
            $set: { dislikeCount: newDislikeCount },
            $pull: { dislikedBy: this.userId }
          });
      }
    }
  }
});
