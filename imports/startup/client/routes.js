import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Meteor } from 'meteor/meteor';

//import for templates js
import '../../ui/layouts/app-body.js';
import '../../ui/pages/start.js';
import '../../ui/pages/home.js';
import '../../ui/pages/genres.js';
import '../../ui/navs/nav-main.js';
import '../../ui/navs/nav-start.js';

import '../../ui/accounts/accounts-templates.js';

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
