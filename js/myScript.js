var app = angular.module("myApp", []);

app.controller("toDoList",function($scope){
	//  create empty array fo list
	var thingsToDo = [];
	// add array to scope
	$scope.thingsToDo = thingsToDo;
	// triggered when user clicks add to list button
	$scope.makeNewToDo = function(){
		// add to thingsToDo array in scope
		$scope.thingsToDo.push(
			{
				// get binded data from inputs
				name: $scope.newToDo.name,
				description: $scope.newToDo.description
			}
		);
	}
	// code to remove items found here: 
	// https://stackoverflow.com/questions/15453979/how-do-i-delete-an-item-or-object-from-an-array-using-ng-click
	$scope.remove = function(numOfThings) { 
	    var index = $scope.thingsToDo.indexOf(numOfThings);
	    $scope.thingsToDo.splice(index, 1);     
	}
});





