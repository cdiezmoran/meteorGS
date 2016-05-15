import './game.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Template.Game_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
});

Template.Game_page.onRendered(() => {
  $('.game-container').css('padding-top', $('#affixNav').height());
});

Template.Game_page.helpers({
  game() {
    return getGame();
  },
  developer() {
    const game = getGame();
    return Developers.findOne({ _id: game.developerId });
  }
});

function getGame() {
  const gameId = FlowRouter.getParam('_id');
  return Games.findOne({ _id: gameId });
}
