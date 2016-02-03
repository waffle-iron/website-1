/* global angular */

var application = angular.module('application', ['ui.router', 'ngMaterial', 'ngAnimate']);

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
			},
			'tabset@home':{
				templateUrl: '/application/components/tabset/tabset.html'
			}
		},
		data: {
		}
	});
		
	$urlRouterProvider.otherwise(function($injector) {
		$injector.get('$state').go('home');
	});
   
   
    $mdThemingProvider
    .definePalette('customPrimary', {
        '50': '#404040',
        '100': '#333333',
        '200': '#262626',
        '300': '#1a1a1a',
        '400': '#0d0d0d',
        '500': '#ffffff',
        '600': '#000000',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000',
        'A100': '#4d4d4d',
        'A200': '#595959',
        'A400': '#666666',
        'A700': '#000000'
  });

    $mdThemingProvider
    .definePalette('customAccent',{
        '50': '#d0e6b1',
        '100': '#c5e09e',
        '200': '#b9da8a',
        '300': '#add477',
        '400': '#a2ce63',
        '500': '#96C850',
        '600': '#8ac23d',
        '700': '#7cae37',
        '800': '#6f9b31',
        '900': '#61872b',
        'A100': '#dcedc4',
        'A200': '#e7f3d8',
        'A400': '#f3f9eb',
        'A700': '#537424'
    });

   $mdThemingProvider.theme('default')
   .primaryPalette('customPrimary')
   .accentPalette('customAccent')
   .backgroundPalette('grey', { 'default': '900'})
   .dark();
});