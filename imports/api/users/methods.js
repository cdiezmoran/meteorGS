import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';

//const Future = require('fibers/future');

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

export const addFriend = new ValidatedMethod({
  name: 'user.addFriend',
  validate: new SimpleSchema({
    userId: { type: String }
  }).validator(),
  run({ userId }) {
    Meteor.users.update(this.userId, { $push: { friendsList: userId } });
  }
});

export const removeFriend = new ValidatedMethod({
  name: 'user.removeFriend',
  validate: new SimpleSchema({
    userId: { type: String }
  }).validator(),
  run({ userId }) {
    Meteor.users.update(this.userId, { $pull: { friendsList: userId } });
    Meteor.users.update(userId, { $pull: { friendsList: this.userId } });
  }
});

Meteor.methods({
  createTrialCustomer: (customer) => {
    check(customer, {
      name: String,
      emailAddress: String,
      password: String,
      plan: String,
      token: String
    });

    var emailRegex = new RegExp(customer.emailAddress, "i");
    var lookupCustomer = Meteor.users.findOne({"emails.address": emailRegex});

    if ( !lookupCustomer ) {
      var newCustomer = new Future();

      Meteor.call('stripeCreateCustomer', customer.token, customer.emailAddress, function(error, stripeCustomer){
        if (error) {
          console.log(error);
        } else {
          var customerId = stripeCustomer.id,
              plan       = customer.plan;

          Meteor.call('stripeCreateSubscription', customerId, plan, function(error, response){
            if (error) {
              console.log(error);
            } else {
              // If all goes well with our subscription, we'll handle it here.
            }
          });
        }
      });
      return newCustomer.wait();
    } else {
      throw new Meteor.Error('customer-exists', 'Sorry, that customer email already exists!');
    }
  }
});
