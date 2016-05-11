import './start.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Template.Start_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
});

Template.Start_page.helpers({
  featuredGames() {
    return Games.find({}, { sort: { views: -1 }, limit: 6 });
  },
  gameDeveloperName(developerId) {
    return Developers.findOne({ _id: developerId }).name;
  }
});
