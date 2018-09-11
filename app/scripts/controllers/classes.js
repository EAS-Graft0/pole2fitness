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
            $scope.getClassSchedule(clickedClass.id);


        }
        $scope.getNumber = function(num) {
            return new Array(num);
        }

        $scope.bookClass = function(classToBook, participant) {
            let data = {
                class_id: classToBook.id,
                name: participant.name,
                email: participant.email
            }
            $http.post("http://localhost:88/book", data).then((result) => {
                console.log(result)
            })
        }

        $scope.getClassSchedule = (class_id) => {
            $http.get("http://localhost:88/getClassSchedule?class_id=" + class_id).then((result) => {
                $scope.classSchedule = result.data;
            })
        }

        $scope.getClassSchedule(1);

    });