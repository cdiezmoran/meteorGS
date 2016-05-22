import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

export const updateList = new ValidatedMethod({
  name: 'users.updateList',
  validate: new SimpleSchema({
    gameId: { type: String }
  }).validator(),
  run({ gameId }) {
    if (!_.contains(Meteor.user().myList, gameId)) {
      Meteor.users.update(this.userId, { $push: { myList: gameId } });
    }
    else {
      Meteor.users.update(this.userId, { $pull: { myList: gameId } });
    }
  }
});
