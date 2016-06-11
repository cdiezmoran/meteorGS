import './credit-card.html';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

Template.creditCard.events({
  'keypress [data-stripe="cardNumber"]'(event) {
    var ccNumber = $(event.target).val();
    const $icon = $('#cc-icon');

    $icon.removeClass();
    if (ccNumber.startsWith('34') || ccNumber.startsWith('37')) {
      $icon.addClass('fa fa-cc-amex');
    }
    else if (ccNumber.startsWith('36')) {
      $icon.addClass('fa fa-cc-diners-club');
    }
    else if (ccNumber.startsWith('4')) {
      $icon.addClass('fa fa-cc-visa');
    }
    else if (ccNumber.startsWith('51') || ccNumber.startsWith('52') || ccNumber.startsWith('53') || ccNumber.startsWith('54') || ccNumber.startsWith('55')) {
      $icon.addClass('fa fa-cc-mastercard');
    }
    else if (ccNumber.startsWith('6011') || ccNumber.startsWith('650')) {
      $icon.addClass('fa fa-cc-discover');
    }
    else {
      $icon.addClass('fa fa-credit-card');
    }
  }
})
