'use strict';

/**
 * @ngdoc function
 * @name pole2fitnessApp.controller:ClassesCtrl
 * @description
 * # ClassesCtrl
 * Controller of the pole2fitnessApp
 */
angular.module('pole2fitnessApp')
    .controller('ClassesCtrl', function($scope, $http) {

        $http.get("http://localhost:88/getClasses").then(function(classes) {
            $scope.myClasses = classes.data
            $scope.selectedClass = $scope.myClasses[0]
        })

        $http.get("http://localhost:88/getClassInfo").then(function(classInfo) {
            $scope.classInfo = classInfo.data
        })


        $scope.selectClass = function(clickedClass) {
            $scope.selectedClass = clickedClass
            console.log($scope.selectedClass)
        }
        $scope.getNumber = function(num) {
            return new Array(num);
        }

        $scope.bookClass = function(classToBook, bookee) {
            console.log(classToBook, bookee)
        }
    });