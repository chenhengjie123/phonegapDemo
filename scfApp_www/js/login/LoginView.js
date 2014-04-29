angular.module('scfLogin').directive('loginView',function(loginService){
    
    var loginView = {};
    
    loginView.restrict = "EA";
    loginView.replace = true;
    loginView.templateUrl = "js/login/LoginView.tmp.html";
    
    loginView.link = function(scope,element,attrs){};
    
    return loginView;
    
});