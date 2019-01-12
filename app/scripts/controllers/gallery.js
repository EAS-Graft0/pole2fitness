'use strict';

/**
 * @ngdoc function
 * @name pole2fitnessApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the pole2fitnessApp
 */
angular.module('pole2fitnessApp')
    .controller('GalleryCtrl', function($scope, $http) {

        $http.get('http://pole2fitness.ddns.net/getImages').then(function(images) {
            // console.log(images.data)
            for (let i in images.data) {
                images.data[i] = 'images/' + images.data[i];
            }
            $scope.images = images.data
        });

        $scope.showImage = function(image) {
            $scope.selectedImage = image;
            $scope.showImageDiv = 1;
        }

        $scope.hideImage = function() {
            $scope.showImageDiv = 0;
        }

    });