var dataImported = false;

angular.module('myApp', ['ngRoute','youtube-embed'])
	.config(['$routeProvider', function($routeProvider) {
	
		$routeProvider
			.when('/',{
				controller: 'buildCtrl',
				templateUrl: 'templates/build.html'
			})
			.when('/build',{
				controller: 'buildCtrl',
				templateUrl: 'templates/build.html'
			})
			.otherwise('/');
	}]);