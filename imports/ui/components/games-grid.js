import './games-grid.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Developers } from '../../api/developers/developers.js';

import { setElementHeightByRatio } from '../../startup/client/functions.js';

Template.GamesGrid_comp.onCreated(() => {
  Meteor.subscribe('developers');
});

Template.GamesGrid_comp.onRendered(() => {
  setElementHeightByRatio('.img-responsive.home', 2.12);

  $(window).resize(() => {
    setElementHeightByRatio('.img-responsive.home', 2.12);
  });
});

Template.GamesGrid_comp.helpers({
  gameDeveloperName(developerIds) {
    var firstDeveloperId = developerIds[0];
    var developer = Developers.findOne({ _id: firstDeveloperId });
    if (developerIds.length === 1) {
      return developer && developer.name;
    }
    else {
      return developer && (developer.name + ', +');
    }
  },
  isSearchRoute() {
    return FlowRouter.getRouteName() === 'App.search'
  }
});
