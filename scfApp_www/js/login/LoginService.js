angular.module('scfLogin').factory('loginService',function($http,$q){
    var loginService = {};
    
    loginService.login = function(userName,password){
        
        //$http.defaults.headers.common = {"Access-Control-Request-Headers": "accept, origin, authorization"}; 
        $http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode(userName + ':' + password);
        
        var deferred = $q.defer();
        $http.get('http://172.16.145.16:8000/sap/opu/odata/IWFND/RMTSAMPLEFLIGHT/CarrierCollection').
            success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(data);
            });
        return deferred.promise;
        
    };
    
    return loginService;
    
});