import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Games } from '../games/games.js';

class ReviewsCollection extends Mongo.Collection {
  insert(review, callback) {
    const game = Games.findOne({ _id: review.gameId });
    var rating;
    const ratingCount = game.ratingCount + 1;
    rating = ((game.rating * game.ratingCount) + review.rating) / ratingCount;
    Games.update({ _id: review.gameId }, { $set: { rating, ratingCount } });

    return super.insert(review, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback)
  }
}

export const Reviews = new ReviewsCollection('Reviews');

Reviews.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Reviews.schema = new SimpleSchema({
  content: {
    type: String
  },
  rating: {
    type: Number
  },
  createdAt: {
    type: Date,
    denyUpdate: true
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  gameId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});
