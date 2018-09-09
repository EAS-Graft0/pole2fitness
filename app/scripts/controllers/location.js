'use strict';

/**
 * @ngdoc function
 * @name pole2fitnessApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the pole2fitnessApp
 */
angular.module('pole2fitnessApp')
    .controller('LocationCtrl', function($scope) {
        var map;

        var myLatlng = new google.maps.LatLng(51.683069,-3.216005);


        $scope.initMap = function() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 51.683069,
                    lng: -3.216005
                },
                zoom: 14
            });
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Pole2Fitness - Planet Fitness - Aberbargoed'
            });
        }


        $scope.initMap()
    });