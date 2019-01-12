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

        $http.get("http://pole2fitness.ddns.net/getClasses").then(function(classes) {
            $scope.myClasses = classes.data
            $scope.selectedClass = $scope.myClasses[0]
        })

        $http.get("http://pole2fitness.ddns.net/getClassInfo").then(function(classInfo) {
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
            $http.post("http://pole2fitness.ddns.net/book", data).then((result) => {
                $scope.bookedClass = 1;
                $setTimeout(function() {
                    $scope.bookedClass = 0;
                }, 3000);
                console.log(result)
            })
        }

        $scope.getClassSchedule = (class_id) => {
            $http.get("http://pole2fitness.ddns.net/getClassSchedule?class_id=" + class_id).then((result) => {
                $scope.classSchedule = result.data;
            })
        }

        $scope.getClassSchedule(1);

    });