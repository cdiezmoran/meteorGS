import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

//import for templates js
import '../../ui/layouts/app-body.js';
import '../../ui/pages/start.js';
import '../../ui/navs/nav-main.js';
import '../../ui/navs/nav-start.js';

import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'Start_page', nav: 'Start_nav'});
  }
});

/*FlowRouter.route('games/:_id', {
  name: 'Games.show',
  action() {

  }
});

FlowRouter.route('genre/:genreString', {
  name: 'Genre.filter',
  action() {

  }
});*/

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
