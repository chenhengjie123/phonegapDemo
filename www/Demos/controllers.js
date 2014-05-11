var bindHttpWithViewDemoControllers = angular.module('bindHttpWithViewDemoControllers',[])

.factory('SeverData', function($http,$q){
  var baseUrl = "http://198.199.118.235:3000/api/1.1/cmd?cmd=";

  return{
		getZoneList: function(){
      var deferred = $q.defer();
      $http.get(baseUrl+"LIST_ZONE").
      success(function(data, status, headers, config) {
        deferred.resolve(data.ZONE);
      }).
      error(function(data, status, headers, config) {
        deferred.reject("[]");
      });
      return deferred.promise;
		},

    getDeviceList: function(){
      var deferred = $q.defer();
      $http.get(baseUrl+"list_device").
      success(function(data, status, headers, config) {
        deferred.resolve(data.DEVICE);
      }).
      error(function(data, status, headers, config) {
        deferred.reject("[]");
      });
      return deferred.promise;
		},

    /*
    //try to use variable or return inside success(), but found that the data won't be store in it.
    getDeviceList: function(){
      $http.get(baseUrl+"list_device").
      success(function(data, status, headers, config) {
          return data.DEVICE;
      });
      return [];
		},
    */

		getDevice: function(deviceId){

      var deferred = $q.defer();
      $http.get(baseUrl+"list_device").
      success(function(data, status, headers, config) {
        var devices = data.DEVICE;
        //iterates devices
        for (var device in devices){
          if (devices[device].DEVID === deviceId){
            break;
          }
        }
        deferred.resolve(devices[device]);
      }).
      error(function(data, status, headers, config) {
        deferred.reject("[]");
      });
      return deferred.promise;
		}
	}
});

bindHttpWithViewDemoControllers.controller('zoneListCtrl',
  function ($scope, SeverData) {
    SeverData.getZoneList().then(function(data){
      $scope.zoneList = data;
    });
  }
);

bindHttpWithViewDemoControllers.controller('deviceListCtrl',
  function ($scope, SeverData) {
    SeverData.getDeviceList().then(function(data){
      $scope.deviceList = data;
    });
  }
);

bindHttpWithViewDemoControllers.controller('deviceCtrl',
  function($scope, $routeParams, SeverData) {
    SeverData.getDevice($routeParams.deviceId).then(function(data){
      $scope.device = data;
    });
  }
);
