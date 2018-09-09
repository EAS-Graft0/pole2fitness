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

        $http.get('http://localhost:88/getImages').then(function(images) {
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