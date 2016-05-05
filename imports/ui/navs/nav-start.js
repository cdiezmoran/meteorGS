import './nav-start.html';

import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

Template.Start_nav.onRendered(function startNavOnRendered() {
  //Put navbar on top of the header
  const navbar = $('.navbar');
  navbar.css('margin-bottom', -navbar.height());
});
