import { Meteor } from 'meteor/meteor';

Meteor.publish("userData", () => {
  return Meteor.users.find({}, { fields: { 'profile': 1, 'myList': 1, 'friendsList': 1, 'status': 1 } });
});
