import './game.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';
import { Reviews } from '../../api/reviews/reviews.js';

import './components/review-item.js';

import { updateList } from '../../api/users/methods.js';

Template.Game_page.onCreated(() => {
  Meteor.subscribe('games');
  Meteor.subscribe('developers');
  Meteor.subscribe('reviews');
  Meteor.subscribe('userData');
  setElementHeightByRatio('.game-header-image', 2);
});

Template.Game_page.onRendered(() => {
  $('.game-container').css('padding-top', $('#affixNav').height());
  $('#gameGalleryCarousel').carousel({interval: false});

  setCarouselHeightByRatio(['#gameGalleryCarousel', '.gallery', '.gallery .item', '.gallery .item img'], 1.62);

  $(window).resize(() => {
    setElementHeightByRatio('.game-header-image', 2);
    setCarouselHeightByRatio(['#gameGalleryCarousel', '.gallery', '.gallery .item', '.gallery .item img'], 1.62);
  });
});

Template.Game_page.helpers({
  game() {
    return getGame();
  },
  developers() {
    const game = getGame();
    return game && Developers.find({ _id: { $in: game.developerIds } });
  },
  imagesAndVideos() {
    const game = getGame();
    return game && game.videoLinks && game.videoLinks.concat(game.galleryLinks);
  },
  galleryImages() {
    const game = getGame();
    return game && game.galleryLinks;
  },
  videoLinks() {
    const game = getGame();
    return game && game.videoLinks;
  },
  isActive(index) {
    if (index === 0) {
      return 'active';
    }
  },
  gameReviews() {
    const game = getGame();
    return game && Reviews.find({ gameId: game._id }, { sort: { createdAt: -1 }, limit: 5 });
  },
  reviewCount() {
    const game = getGame();
    return game && Reviews.find({ gameId: game._id }).count();
  },
  isGameOnList() {
    const gameId = FlowRouter.getParam('_id');
    return Meteor.user() && _.contains(Meteor.user().myList, gameId);
  },
  isNotLastDev(index) {
    const game = getGame();
    return game && game.developerIds[index+1];
  },
  languages() {
    const game = getGame();
    return game && game.languages;
  },
  esrbRatingImg(esrbRating) {
    if (esrbRating === 'early-childhood') {
      return 'http://vignette1.wikia.nocookie.net/nintendo/images/f/f5/ESRB_EC.png/revision/latest?cb=20121105183531&path-prefix=en';
    }
    else if (esrbRating === 'everyone'){
      return 'http://vignette1.wikia.nocookie.net/nintendo/images/5/55/ESRB_E.png/revision/latest?cb=20121105183822&path-prefix=en';
    }
    else if (esrbRating === 'e10+') {
      return 'http://vignette3.wikia.nocookie.net/nintendo/images/b/b9/ESRB_E10.png/revision/latest?cb=20121105183922&path-prefix=en';
    }
    else if (esrbRating === 'teen') {
      return 'http://vignette4.wikia.nocookie.net/nintendo/images/2/23/ESRB_T.png/revision/latest?cb=20121105184020&path-prefix=en';
    }
    else if (esrbRating === 'mature') {
      return 'http://vignette1.wikia.nocookie.net/nintendo/images/1/12/ESRB_M.png/revision/latest?cb=20121105184159&path-prefix=en';
    }
    else if (esrbRating === 'adults-only') {
      return 'http://vignette4.wikia.nocookie.net/nintendo/images/3/3d/ESRB_AO.png/revision/latest?cb=20121105184429&path-prefix=en';
    }
    else {
      return 'http://vignette2.wikia.nocookie.net/nintendo/images/0/02/ESRB_RP.png/revision/latest?cb=20121105184537&path-prefix=en';
    }
  }
});

Template.Game_page.events({
  'click .js-add-to-list'(event, instance) {
    event.preventDefault();

    updateList.call({ gameId: FlowRouter.getParam('_id') });
  },
  'mouseenter .btn-list-added'(event, instance) {
    $('#icon-added').removeClass('fa-check').addClass('fa-times');
    $('.btn-list-added').contents()[1].nodeValue = ' Remove';
  },
  'mouseleave .btn-list-added'(event, instance) {
    $('#icon-added').removeClass('fa-times').addClass('fa-check');
    $('.btn-list-added').contents()[1].nodeValue = ' In List';  }
});

function getGame() {
  const gameId = FlowRouter.getParam('_id');
  return Games.findOne({ _id: gameId });
}
