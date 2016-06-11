import './devGames.html';

import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

import '../components/games-grid.js';

Template.DevGames_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
});

Template.DevGames_page.onRendered(() => {
  $('.developer-div').css('margin-top', $('#affixNav').height());
});

Template.DevGames_page.helpers({
  developer() {
    const devId = FlowRouter.getParam('devId');
    return Developers.findOne({ _id: devId });
  },
  developerGames() {
    const devId = FlowRouter.getParam('devId');
    return Games.find({ developerIds: devId });
  }
});
