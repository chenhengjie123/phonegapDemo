var phonegapDemo = angular.module('phonegapDemo', ['ui.router','ionic'])
/**
 * The Areas factory handles saving and loading areas
 * from local storage, and also lets us save and load the
 * last active area index.
 */


//need to restructure $scope.closeNewArea，$timeout  to make the check null functions together

.factory('Areas', function(){
	return{
		all: function(){
			var areaString = window.localStorage['areas'];
			if(areaString) {
				return angular.fromJson(areaString);
			}
			return [];
		},
		save: function(areas){
			window.localStorage['areas'] = angular.toJson(areas);
		},
		newArea: function(areaName){
			//Add a new area
			return{
				name: areaName,
				lights: []
			};
		},
		getLastActiveIndex: function() {
			return parseInt(window.localStorage['lastActiveArea']) || 0;
		},
		setLastActiveIndex: function(index){
			window.localStorage['lastActiveArea'] = index;
		},
		clear: function(){
			window.localStorage.removeItem("areas");
		}
	}
});

phonegapDemo.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.tmp.html",
      controller: "phonegapDemoCtrl"
    })
    .state('demos', {
      url: "/demos",
      templateUrl: "demos.tmp.html"

    })

});

