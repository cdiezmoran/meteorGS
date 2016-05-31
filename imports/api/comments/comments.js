import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class CommentsCollection extends Mongo.Collection {
  insert(comment, callback) {
    return super.insert(comment, callback);
  }
  remove(selector, callback) {
    return super.remove(selector, callback)
  }
}

export const Comments = new CommentsCollection('Comments');

Comments.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Comments.schema = new SimpleSchema({
  comment: { type: String },
  createdAt: { type: Date, denyUpdate: true },
  userId: { type: String, regEx: SimpleSchema.RegEx.Id },
  reviewId: { type: String, regEx: SimpleSchema.RegEx.Id }
});
