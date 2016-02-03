/* global angular */

var application = angular.module('application', ['ui.router', 'ngMaterial']);

application.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			'': {
				templateUrl: '/application/templates/home/home.html'
			},
			'navigation@home':{
				templateUrl: '/application/components/navigation/navigation.html',
				controller: 'navigation'
			},
			'contactUs@home':{
				templateUrl: '/application/components/contactUs/contactUs.html',
				controller: 'contactUs'
			},
			'content@home':{
				templateUrl: '/application/components/content/content.html'
			}
		},
		data: {
		}
	});
		
	$urlRouterProvider.otherwise(function($injector) {
		$injector.get('$state').go('home');
	});
   
  	$mdThemingProvider.theme('default')
    .primaryPalette('grey', { 'default': '900'});
});