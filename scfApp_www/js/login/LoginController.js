angular.module('scfLogin').controller('loginController',function($scope,loginService){
    
    $scope.userName = "xuri";
    $scope.password = "123456";
    
    $scope.login = function(){
        console.log($scope.userName,$scope.password);
        loginService.login($scope.userName,$scope.password).then(function(data){
            $scope.result = data;
            console.log(data);
        },function(data){
            alert(data);
        });
        
    }
    
    
});