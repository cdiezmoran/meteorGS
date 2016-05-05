import './nav-main.html';

import { Template } from 'meteor/templating';

Template.Main_nav.onRendered(function mainNavOnRender() {
  $('#affixNav').affix({
    offset: {
      top: 51
    }
  });
});
