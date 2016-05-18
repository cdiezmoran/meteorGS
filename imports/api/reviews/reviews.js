import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ReviewsCollection extends Mongo.Collection {
  insert(review, callback) {
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
