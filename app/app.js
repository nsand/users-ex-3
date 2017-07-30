import angular from 'angular';
import 'angular-resource';
import '@uirouter/angularjs';

import name from './app.module';

import root from './routes/root.route';
import user from './routes/user.route';

angular.module(name).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) => {
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/users');

	$stateProvider.state(root);
	$stateProvider.state(user);
}]);
