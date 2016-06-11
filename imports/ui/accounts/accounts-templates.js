import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { sAlert } from 'meteor/juliancwirko:s-alert';
import { $ } from 'meteor/jquery';

import './accounts-templates.html';
import '../components/credit-card.js';

// We identified the templates that need to be overridden by looking at the available templates
// here: https://github.com/meteor-useraccounts/unstyled/tree/master/lib
Template['override-atPwdFormBtn'].replaces('atPwdFormBtn');
Template['override-atPwdForm'].replaces('atPwdForm');
Template['override-atTextInput'].replaces('atTextInput');
Template['override-atTitle'].replaces('atTitle');
Template['override-atError'].replaces('atError');


Template.mySignupForm.onRendered(() => {
  $('#application-signup').validate({
    rules: {
      name: {
        required: true
      },
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      name: {
        required: "Please enter your name."
      },
      emailAddress: {
        required: "Please enter your email address to sign up.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters."
      }
    },
    submitHandler: () => {
      STRIPE.getToken( '#application-signup', {
        number: $('[data-stripe="cardNumber"]').val(),
        exp_month: $('[data-stripe="expMo"]').val(),
        exp_year: $('[data-stripe="expYr"]').val(),
        cvc: $('[data-stripe="cvc"]').val()
      }, () => {
        var customer = {
          name: $('[name="fullName"]').val(),
          emailAddress: $('[name="emailAddress"]').val(),
          password: $('[name="password"]').val(),
          plan: $('[name="selectPlan"]:checked').val(),
          token: $('[name="stripeToken"]').val()
        };

        var submitButton = $('input[type="submit"]').button('loading');

        Meteor.call('createTrialCustomer', customer, (error, response) => {
          if (error) {
            sAlert.error(error.reason);
            submitButton.button('reset');
          } else {
            if ( response.error ) {
              sAlert.error(response.message);
              submitButton.button('reset');
            } else {
              Meteor.loginWithPassword(customer.emailAddress, customer.password, (error) => {
                if (error) {
                  sAlert.error(error.reason);
                  submitButton.button('reset');
                } else {
                  FlowRouter.go('/home');
                  submitButton.button('reset');
                }
              });
            }
          }
        });
      });
    }
  });
})
