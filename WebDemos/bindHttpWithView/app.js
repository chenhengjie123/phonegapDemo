var bindHttpWithViewDemo = angular.module('bindHttpWithViewDemo', [
  'ngRoute',
  'bindHttpWithViewDemoControllers'
]);

    bindHttpWithViewDemo.directive( 'goClick', function ( $location ) {
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

  bindHttpWithViewDemo.config(['$routeProvider',
  function($routeProvider,$location) {
    $routeProvider.
      when('/zoneList', {
        template: '<div>zoneList:<br>{{zoneList}}</div>',
        controller: 'zoneListCtrl'
      }).
      when('/deviceList', {
        template: '<div>deviceList:<br>{{deviceList}}</div>',
        controller: 'deviceListCtrl'
      }).
      when('/device/:deviceId', {
        template: '<div>device:<br>{{device}}</div>',
        controller: 'deviceCtrl'
      }).
      otherwise({
        redirectTo: '/zoneList'
      });
  }]);




