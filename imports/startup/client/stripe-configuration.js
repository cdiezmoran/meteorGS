import { Meteor } from 'meteor/meteor';
import { Stripe } from 'meteor/mrgalaxy:stripe';
import { $ } from 'meteor/jquery';

Meteor.startup(() => {
  const stripeKey = Meteor.setting.public.stripe.testPublishableKey;
  Stripe.setPublishableKey(stripeKey);

  STRIPE = {
    getToken: function( domElement, card, callback ) {
      Stripe.card.createToken( card, function( status, response ) {
        if ( response.error ) {
          //Show error message
        } else {
          STRIPE.setToken( response.id, domElement, callback );
        }
      });
    },
    setToken: function( token, domElement, callback ) {
      $( domElement ).append( $( "<input type='hidden' name='stripeToken' />" ).val( token ) );
      callback();
    }
  }
});
