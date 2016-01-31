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
			'sidebar@home':{
				templateUrl: '/application/components/sidebar/sidebar.html',
				controller: 'AppCtrl'
			}
		},
		data: {
		}
	});
		
	$urlRouterProvider.otherwise(function($injector) {
		$injector.get('$state').go('home');
	});
   
   	$mdThemingProvider.theme('black')
   	.primaryPalette('grey', {
        'default': '900'
    })
    .accentPalette('light-green');
 
    $mdThemingProvider.setDefaultTheme('black');
      
});