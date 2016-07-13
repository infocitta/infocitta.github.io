// Code goes here

var myApp = angular.module('ngMap', ['angularUtils.directives.dirPagination']);

function MyController($scope, $http) {


  $scope.currentPage = 1;
  $scope.pageSize = 5;
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
