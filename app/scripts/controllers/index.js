'use strict';

/**
 * @ngdoc function
 * @name pole2fitnessApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the pole2fitnessApp
 */
angular.module('pole2fitnessApp')
    .controller('IndexCtrl', function($scope) {
        $scope.titles = [{
                "name": "Home",
                "href": "#/",
                "active": 1
            }, {
                "name": "Classes",
                "href": "#!/classes",
                "active": 0
            }, {
                "name": "Gallery",
                "href": "#!/gallery",
                "active": 0
            },
            // {
            // "name": "Faq",
            // "href": "#!/faqs",
            // "active": 0
            // },
            // {
            // "name": "Contact",
            // "href": "#!/contact",
            // "active": 0
            // },
            {
                "name": "Location",
                "href": "#!/location",
                "active": 0
            }
        ]
        $scope.activeTitle = function(i) {
            for (var t in $scope.titles) {
                $scope.titles[t].active = 0
            }
            $scope.titles[i].active = 1
        }
    });