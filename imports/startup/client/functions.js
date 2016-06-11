import { $ } from 'meteor/jquery';

export const setElementHeightByRatio = (selector, ratio) => {
  var width = $(selector).width();
  var height = width / ratio;

  $(selector).height(height);
}

export const setCarouselHeightByRatio = (selectors, ratio) => {
  var width = $(selectors[0]).width();
  var height = width / ratio;

  selectors.forEach((selector) => {
    $(selector).height(height);
  });
}
