var bindHttpWithViewDemo = angular.module('bindHttpWithViewDemo', [
  'ngRoute',
  'bindHttpWithViewDemoControllers'
]);

  bindHttpWithViewDemo.config(['$routeProvider',
  function($routeProvider) {
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
