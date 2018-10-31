'use strict';

/**
 * @ngdoc function
 * @name pole2fitnessApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the pole2fitnessApp
 */
angular.module('pole2fitnessApp')
    .controller('ContactCtrl', function($scope, $http) {
        $scope.contactInfo = {
            "name": {
                "label": "Name",
                "input": ""
            },
            "email": {
                "label": "Email",
                "input": ""
            },
            "phone": {
                "label": "Phone",
                "input": ""
            },
            "subject": {
                "label": "Subject",
                "input": ""
            },
            "message": {
                "label": "Message",
                "input": ""
            }
        }

        $scope.sendMessage = function() {
            console.log($scope.contactInfo)
            $http.post("http://pole2fitness.myddns.me/sendMessage", $scope.contactInfo).then(function(res) {
                console.log(res)
            })
        }
        
    });