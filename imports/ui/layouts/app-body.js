import './app-body.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js'

Template.App_body.onCreated(function appBodyOnCreated() {
  Meteor.subscribe('games');
  console.log(Games.find());
});

Template.App_body.helpers({
});
