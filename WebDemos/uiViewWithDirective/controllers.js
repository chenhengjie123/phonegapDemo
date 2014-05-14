uiViewWithDirectiveDemo.factory('uiViewWithDirectiveFactory', function($http,$q){
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

uiViewWithDirectiveDemo.controller('stateDirectiveCtrl', function($scope, uiViewWithDirectiveFactory, $ionicModal){
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});
