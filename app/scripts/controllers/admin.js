'use strict';

/**
 * @ngdoc function
 * @name pole2fitnessApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the pole2fitnessApp
 */
angular.module('pole2fitnessApp')
    .controller('AdminCtrl', function($scope, $http) {

        $scope.polers = [{
            "id": 1,
            "name": "Kodie Mackay",
            "points": 14,
            "class": "Beginner"
        }, {
            "id": 2,
            "name": "Kodie Mackay",
            "points": 14,
            "class": "Ametuer"
        }, {
            "id": 3,
            "name": "Kodie Mackay",
            "points": 14,
            "class": "Advanced"
        }, {
            "id": 4,
            "name": "Eve Chanel",
            "points": 4,
            "class": "Beginner"
        }, {
            "id": 5,
            "name": "Eve chanel",
            "points": 4,
            "class": "Ametuer"
        }]

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

        $scope.removePoler = function(poler) {
            console.log(poler)
            $http.get("http://localhost:88/removeMapping?classID=" + poler.class_id + "&userID=" + poler.poler_id).then(function(res) {
                console.log(res)
            })
        }
    });