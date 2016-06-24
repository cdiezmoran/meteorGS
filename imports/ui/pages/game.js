import './game.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { $ } from 'meteor/jquery';
import { _ } from 'meteor/underscore';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';
import { Reviews } from '../../api/reviews/reviews.js';

import '../components/review-item.js';
import '../components/review-submit-form';

import { updateList } from '../../api/users/methods.js';
import { setElementHeightByRatio, setCarouselHeightByRatio  } from '../../startup/client/functions.js';

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

  setCarouselHeightByRatio(['#gameGalleryCarousel', '.gallery', '.gallery .item', '.gallery .item img'], 1.72);

  $(window).resize(() => {
    setElementHeightByRatio('.game-header-image', 2);
    setCarouselHeightByRatio(['#gameGalleryCarousel', '.gallery', '.gallery .item', '.gallery .item img'], 1.72);
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
    Session.set('numberOfVideos', game.videoLinks.length);
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
  isVideo(index) {
    const numberOfVideos = Session.get('numberOfVideos');
    if (index < numberOfVideos) {
      return 'vid-indicator';
    }
  },
  gameReviews() {
    const game = getGame();
    return game && Reviews.find({ gameId: game._id }, { sort: { createdAt: -1 }, limit: 5 });
  },
  reviewCount() {
    const game = getGame();
    return game && Reviews.find({ gameId: game._id }).count();;
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
  },
  showRating(rating) {
    const fullStar = '<i class="fa fa-star" aria-hidden="true"></i>';
    const halfStar = '<i class="fa fa-star-half-o" aria-hidden="true"></i>'
    const emptyStar = '<i class="fa fa-star-o" aria-hidden="true"></i>';

    var html = '';

    if (rating === 5) {
      html = fullStar + fullStar + fullStar + fullStar + fullStar;
    }
    else if (rating < 5 && rating > 4) {
      html = fullStar + fullStar + fullStar + fullStar + halfStar;
    }
    else if (rating === 4) {
      html = fullStar + fullStar + fullStar + fullStar + emptyStar;
    }
    else if (rating < 4 && rating > 3) {
      html = fullStar + fullStar + fullStar + halfStar + emptyStar;
    }
    else if (rating === 3) {
      html = fullStar + fullStar + fullStar + emptyStar + emptyStar;
    }
    else if(rating < 3 && rating > 2) {
      html = fullStar + fullStar + halfStar + emptyStar + emptyStar;
    }
    else if (rating === 2) {
      html = fullStar + fullStar + emptyStar + emptyStar + emptyStar;
    }
    else if (rating < 2 && rating > 1) {
      html = fullStar + halfStar + emptyStar + emptyStar + emptyStar;
    }
    else if (rating === 1) {
      html = fullStar + emptyStar + emptyStar + emptyStar + emptyStar;
    }
    else if (rating < 1 && rating > 0) {
      html = halfStar + emptyStar + emptyStar + emptyStar + emptyStar;
    }
    else {
      html = emptyStar + emptyStar + emptyStar + emptyStar + emptyStar;
    }

    if (rating % 1 !== 0) {
      html += ' ' + rating.toFixed(1) + '/5';
    }
    else {
      html += ' ' + rating + '/5';
    }

    return html;
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
    $('.btn-list-added').contents()[1].nodeValue = ' In List';
  },
  'slide.bs.carousel #gameGalleryCarousel'(event) {
    const activeSlideIndex = $('#gameGalleryCarousel .active').index();
    const numberOfVideos = Session.get('numberOfVideos');
    if (activeSlideIndex < numberOfVideos) {
      callPlayer("trailerFrame" + activeSlideIndex, "stopVideo");
    }
  }
});

function getGame() {
  const gameId = FlowRouter.getParam('_id');
  return Games.findOne({ _id: gameId });
}

function callPlayer(frame_id, func, args) {
    if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    var iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
        iframe = iframe.getElementsByTagName('iframe')[0];
    }

    // When the player is not ready yet, add the event to a queue
    // Each frame_id is associated with an own queue.
    // Each queue has three possible states:
    //  undefined = uninitialised / array = queue / 0 = ready
    if (!callPlayer.queue) callPlayer.queue = {};
    var queue = callPlayer.queue[frame_id],
        domReady = document.readyState == 'complete';

    if (domReady && !iframe) {
        // DOM is ready and iframe does not exist. Log a message
        window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
        if (queue) clearInterval(queue.poller);
    } else if (func === 'listening') {
        // Sending the "listener" message to the frame, to request status updates
        if (iframe && iframe.contentWindow) {
            func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
            iframe.contentWindow.postMessage(func, '*');
        }
    } else if (!domReady ||
               iframe && (!iframe.contentWindow || queue && !queue.ready) ||
               (!queue || !queue.ready) && typeof func === 'function') {
        if (!queue) queue = callPlayer.queue[frame_id] = [];
        queue.push([func, args]);
        if (!('poller' in queue)) {
            // keep polling until the document and frame is ready
            queue.poller = setInterval(function() {
                callPlayer(frame_id, 'listening');
            }, 250);
            // Add a global "message" event listener, to catch status updates:
            messageEvent(1, function runOnceReady(e) {
                if (!iframe) {
                    iframe = document.getElementById(frame_id);
                    if (!iframe) return;
                    if (iframe.tagName.toUpperCase() != 'IFRAME') {
                        iframe = iframe.getElementsByTagName('iframe')[0];
                        if (!iframe) return;
                    }
                }
                if (e.source === iframe.contentWindow) {
                    // Assume that the player is ready if we receive a
                    // message from the iframe
                    clearInterval(queue.poller);
                    queue.ready = true;
                    messageEvent(0, runOnceReady);
                    // .. and release the queue:
                    while (tmp = queue.shift()) {
                        callPlayer(frame_id, tmp[0], tmp[1]);
                    }
                }
            }, false);
        }
    } else if (iframe && iframe.contentWindow) {
        // When a function is supplied, just call it (like "onYouTubePlayerReady")
        if (func.call) return func();
        // Frame exists, send message
        iframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }
    /* IE8 does not support addEventListener... */
    function messageEvent(add, listener) {
        var w3 = add ? window.addEventListener : window.removeEventListener;
        w3 ?
            w3('message', listener, !1)
        :
            (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
    }
}
