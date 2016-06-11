import './start.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

import { setElementHeightByRatio } from '../../startup/client/functions.js';

Template.Start_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
});

Template.Start_page.onRendered(() => {
  setElementHeightByRatio('.img-responsive.start', 1.98);

  $(window).resize(() => {
    setElementHeightByRatio('.img-responsive.start', 1.98);
  });
});

Template.Start_page.helpers({
  featuredGames() {
    return Games.find({}, { sort: { views: -1 }, limit: 6 });
  },
  gameDeveloperName(developerIds) {
    var firstDeveloperId = developerIds[0];
    var developer = Developers.findOne({ _id: firstDeveloperId });
    if (developerIds.length === 1) {
      return developer && developer.name;
    }
    else {
      return developer && (developer.name + ', +');
    }
  }
});
