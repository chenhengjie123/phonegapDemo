angular.module('scfApp').controller('appController',function($scope,$ionicLoading){
    var t = new Date().getTime();
    function initController(){
        
        document.addEventListener('deviceready', onDeviceReady, false);
        
        
        /*$scope.show = function() {
            $scope.loading = $ionicLoading.show({
                content: 'Loading',
            });
        };
        $scope.hide = function(){
            $scope.loading.hide();
        };
        
        $scope.show();*/
        
        /** 用于浏览器中测试查看 */
        /*setTimeout(function(){
            onDeviceReady();
        },2000);*/
    }
    
    function onDeviceReady(){
        //$scope.hide();
        console.log(new Date().getTime()-t);
        $scope.$emit('loaded');
    }
    
    initController();
});
