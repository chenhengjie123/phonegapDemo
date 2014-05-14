var uiViewWithDirectiveDemo = angular.module('uiViewWithDirective', ['ui.router','ionic']);

  //directive for go-click
/*
    uiViewWithDirectiveDemo.directive( 'goClick', function ( $location ) {
      return function ( scope, element, attrs ) {
        var path;

        attrs.$observe( 'goClick', function (val) {
          path = val;
        });

        element.bind( 'click', function () {
          scope.$apply( function () {
            $location.path( path );
          });
        });
      };
    });
*/

uiViewWithDirectiveDemo.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "state1.tmp.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "state2.tmp.html"
    })
});

  uiViewWithDirectiveDemo.directive('stateView', function() {
    return {
      templateUrl: 'stateDirective.tmp.html',
      controller: 'stateDirectiveCtrl'
    };
  });





