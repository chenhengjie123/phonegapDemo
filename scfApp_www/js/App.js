
var login = angular.module('scfLogin',[]);

var scfApp = angular.module('scfApp',['ionic','scfLogin']);

scfApp.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});