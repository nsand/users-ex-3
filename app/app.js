import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from '@uirouter/angularjs';

import name from './app.module';

import root from './routes/root';
import user from './routes/user';

angular.module(name).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) => {
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/users');

	$stateProvider.state(root);
	$stateProvider.state(user);
}]);
