// Code goes here

var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http,NgMap) {

NgMap.getMap().then(function(map) {
    $scope.map = map;
  });

  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.items = [];

 $http.get("entities.json")
    .then(function(response) {
        $scope.items = response.data;
    });
	
	
  $scope.pageChangeHandler = function(num) {
      
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
  
  };
}

myApp.controller('MyController', MyController);
myApp.controller('OtherController', OtherController);
