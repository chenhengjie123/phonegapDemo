angular.module('scfApp').directive('appView',function($compile){
    var appView = {},
        _listeners = [];
    
    appView.restrict = "EA";
    appView.replace = true;
    
    appView.template = "<div class='app row row-center'></div>";
    
    appView.link = function(scope,element,attrs){
        _listeners.push(scope.$on('loaded',_onLoaded));
        _listeners.push(scope.$on('$destroy',_onDestroy));
        
        scope.addLoginView = function(){
            var ele = angular.element('<login-view ng-controller="loginController"></login-view>'),
                compiled = $compile(ele),
                newScope = scope.$new(true);
            compiled = compiled(newScope);
            element.append(compiled);
        };
    };
    
    appView.controller = function($scope,$element){

    };
    
    function _onLoaded(e){
        e.targetScope.addLoginView();
    }
    
    function _onDestroy(){
        for(var i in _listeners){_listeners[i]();}
    }
    
    return appView;
});