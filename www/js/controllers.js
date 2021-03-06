phonegapDemo.controller('phonegapDemoCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $timeout, $ionicModal, Areas) {


	// A utility function for creating a new area
	  // with the given areaName
	  var createArea = function(areaName) {
	    var newArea = Areas.newArea(areaName);
	    $scope.areas.push(newArea);
	    Areas.save($scope.areas);
	    $scope.selectArea(newArea, $scope.areas.length-1);
	  }


	  // Load or initialize areas
	  $scope.areas = Areas.all();

	  // Grab the last active, or the first area
	  $scope.activeArea = $scope.areas[Areas.getLastActiveIndex()];


	  /*
	  $scope.newArea = function() {
	    var areaName = prompt('Area name');
	    if(areaName) {
	      createArea(areaName);
	    }
	  };
	  */


	  // Create our modal
	  $ionicModal.fromTemplateUrl('new-area.html', function(newAreaModal) {
	    $scope.areaModal = newAreaModal;
	  }, {
	    scope: $scope
	  });

	  // Called to create a new area
	  $scope.createArea = function(area) {
  	    var newArea = Areas.newArea(area.name);
  	    $scope.areas.push(newArea);
		Areas.save($scope.areas);
	    $scope.areaModal.hide();
	    area.name = "";
		$scope.selectArea(newArea, $scope.areas.length-1);
	  };

	  $scope.newArea = function() {
	    $scope.areaModal.show();
	  };

	  $scope.closeNewArea = function() {
		  //check if there is area exist
		  if($scope.areas.length != 0){
			  $scope.areaModal.hide();
		  }
	  }




	  // Called to select the given area
	  $scope.selectArea = function(area, index) {
	    $scope.activeArea = area;
	    Areas.setLastActiveIndex(index);
	    $ionicSideMenuDelegate.toggleLeft(false);
	  };

	  // Create our light modal
	  $ionicModal.fromTemplateUrl('new-light.html', function(newLightModal) {
	    $scope.lightModal = newLightModal;
	  }, {
	    scope: $scope
	  });

	  $scope.createLight = function(light) {
	    if(!$scope.activeArea || !light) {
	      return;
	    }
      var myDate = new Date();
	    $scope.activeArea.lights.push({
	      name: light.name,
        addTime: myDate.toLocaleString()
	    });
	    $scope.lightModal.hide();

	    // Inefficient, but save all the areas
	    Areas.save($scope.areas);

	    light.name = "";
	  };

	  $scope.newLight = function() {
	    $scope.lightModal.show();
	  };

	  $scope.closeNewLight = function() {
	    $scope.lightModal.hide();
	  }

	  $scope.toggleAreas = function() {
	    $ionicSideMenuDelegate.toggleLeft();
	  };

	  $scope.isClearDatas = function() {
	  	$ionicPopup.confirm({
	            title: 'Confirm clear datas',
	            content: 'Are you sure to clear all datas?'
	          }).then(function(res) {
	            if(res) {
	              Areas.clear();
	  			  //reload page to make clear be effective
	  			  location.reload()
	            } else {
	              ;
	            }
	          });
	  };


	  // Try to create the first area, make sure to defer
	  // this by using $timeout so everything is initialized
	  // properly
	  $timeout(function() {
	      while($scope.areas.length == 0) {
	        /*
	        var areaTitle = prompt('Your first area title:');
	        	        if(areaTitle) {
	        	          createArea(areaTitle);*/
	       	  $scope.areaModal.show();
	          break;
	      }
	  });


});


phonegapDemo.controller('phonegapDemo_DemosCtrl', function($scope){
   $scope.deviceWidth = document.body.clientWidth;
   $scope.deviceHeight = document.body.clientHeight;

  $scope.initEditor = function(){
    // trigger extension
    ace.require("ace/ext/language_tools");
    var editor = ace.edit("editor");
    editor.session.setMode("ace/mode/javascript");
    editor.setTheme("ace/theme/tomorrow");
    // enable autocompletion and snippets
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
  }
});
