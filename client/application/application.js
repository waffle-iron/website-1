/* global angular */

var application = angular.module('application', ['ui.router']);

application.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'': {
				templateUrl: '/application/templates/home/home.html'
			}
		},
		data: {
		}
	});
		
	$urlRouterProvider.otherwise(function($injector) {
		$injector.get('$state').go('home');
	});
});