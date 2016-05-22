import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session'
import { $ } from 'meteor/jquery';

//import for templates js
import '../../ui/layouts/app-body.js';
import '../../ui/pages/start.js';
import '../../ui/pages/home.js';
import '../../ui/pages/genres.js';
import '../../ui/pages/profile.js';
import '../../ui/pages/game.js';
import '../../ui/pages/search.js';
import '../../ui/pages/myList.js';
import '../../ui/navs/nav-main.js';
import '../../ui/navs/nav-start.js';

import '../../ui/accounts/accounts-templates.js';

//saveScrollPosition and jumpToPrevScrollPosition functions are used for page position history
Session.set('previousPaths', []);

function saveScrollPosition(context) {
  var path = context.path;
  var pathInfo = {
    path: path,
    scrollPosition: window.scrollY
  };

  var previousPaths = Session.get('previousPaths');
  previousPaths.forEach((prevPathInfo, index) => {
    var prevPath = prevPathInfo.path;
    if ((path.substring(0, 5) === '/game' && prevPath.substring(0, 5) === '/game') || (path === prevPath)) {
      previousPaths.splice(index, 1);
    }
  });
  previousPaths.push(pathInfo);
  Session.set('previousPaths', previousPaths);
  console.log(previousPaths);
}

function jumpToPrevScrollPosition(context, index) {
  var previousPaths = Session.get('previousPaths');
  var scrollPosition = 0;
  previousPaths.forEach((prevPathInfo) => {
    if(prevPathInfo && prevPathInfo.path === context.path) {
      scrollPosition = prevPathInfo.scrollPosition;
      previousPaths.splice(index, 1);
    }
  });

  if(scrollPosition === 0) {
    window.scroll(0, scrollPosition);
  } else {
    setTimeout(function () {
      window.scroll(0, scrollPosition);
    }, 10);
  }
  Session.set('previousPaths', previousPaths);
  console.log(previousPaths);
}

FlowRouter.triggers.enter([jumpToPrevScrollPosition]);
FlowRouter.triggers.exit([saveScrollPosition]);

FlowRouter.route('/', {
  name: 'App.start',
  triggersEnter: [(context, redirect) => {
    if (Meteor.loggingIn() || Meteor.userId()) {
      redirect('/home');
    }
  }],
  action() {
    BlazeLayout.render('App_body', { main: 'Start_page', nav: 'Start_nav'});
  }
});

const costumerRoutes = FlowRouter.group({
  triggersEnter: [(context, redirect) => {
    if (!Meteor.userId()) {
      redirect('/');
    }
  }]
});

costumerRoutes.route('/home', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Home_page', nav: 'Main_nav' });
  }
});

costumerRoutes.route('/genre/:genre', {
  name: 'Genre.show',
  action() {
    BlazeLayout.render('App_body', { main: 'Genres_page', nav: 'Main_nav' });
  }
});

costumerRoutes.route('/profile', {
  name: 'Current.profile',
  action() {
    BlazeLayout.render('App_body', { main: 'Profile_page', nav: 'Main_nav' });
  }
});

costumerRoutes.route('/game/:_id', {
  name: 'Games.show',
  action() {
    BlazeLayout.render('App_body', { main: 'Game_page', nav: 'Main_nav' })
  }
});

costumerRoutes.route('/search', {
  name: 'App.search',
  action() {
    BlazeLayout.render('App_body', { main: 'Search_page', nav: 'Main_nav' })
  }
});

costumerRoutes.route('/myList', {
  name: 'User.list',
  action() {
    BlazeLayout.render('App_body', { main: 'MyList_page', nav: 'Main_nav' })
  }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'tempNotFound' });
  }
};

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signup',
  path: '/signup'
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});
