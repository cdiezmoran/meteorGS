import { Meteor } from 'meteor/meteor';
import { Stripe } from 'meteor/mrgalaxy:stripe';
import { sAlert } from 'meteor/juliancwirko:s-alert';
import { $ } from 'meteor/jquery';

Meteor.startup(() => {
  const stripeKey = Meteor.setting.public.stripe.testPublishableKey;
  Stripe.setPublishableKey(stripeKey);

  STRIPE = {
    getToken: function( domElement, card, callback ) {
      Stripe.card.createToken( card, function( status, response ) {
        if ( response.error ) {
          sAlert.error(esponse.error.message);
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
