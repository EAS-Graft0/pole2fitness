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

        $http.get("http://pole2fitness.ddns.net/getClasses").then(function(classes) {
            $scope.myClasses = classes.data
            $scope.selectedClass = $scope.myClasses[0]
        })

        $http.get("http://pole2fitness.ddns.net/getClassInfo").then(function(classInfo) {
            $scope.classInfo = classInfo.data
        })


        $scope.selectClass = function(clickedClass) {
            $scope.selectedClass = clickedClass
            console.log($scope.selectedClass)
        }

        $scope.removePoler = function(poler) {
            console.log(poler)
            $http.get("http://pole2fitness.ddns.net/removeMapping?classID=" + poler.class_id + "&userID=" + poler.poler_id).then(function(res) {
                console.log(res)
            })
        }

        $scope.startNewBlock = (date) => {
            date.setHours(19, 00, 00);
            var classes = {}

            /* Class 1 */
            classes.class1 = {
                date1: new Date(date),
                date2: new Date(date),
                date3: new Date(date),
                date4: new Date(date),
                date5: new Date(date)
            };

            classes.class1.date2.setDate(classes.class1.date1.getDate(classes.class1.date1) + 7);
            classes.class1.date3.setDate(classes.class1.date1.getDate(classes.class1.date1) + 14);
            classes.class1.date4.setDate(classes.class1.date1.getDate(classes.class1.date1) + 21);
            classes.class1.date5.setDate(classes.class1.date1.getDate(classes.class1.date1) + 28);
            // dates[0].push(classes.class1);
            /* Class 1 */

            /* Class 2 */
            date.setHours(20, 05, 00);

            classes.class2 = {
                date1: new Date(date),
                date2: new Date(date),
                date3: new Date(date),
                date4: new Date(date),
                date5: new Date(date)
            };

            classes.class2.date2.setDate(classes.class2.date1.getDate(classes.class2.date1) + 7);
            classes.class2.date3.setDate(classes.class2.date1.getDate(classes.class2.date1) + 14);
            classes.class2.date4.setDate(classes.class2.date1.getDate(classes.class2.date1) + 21);
            classes.class2.date5.setDate(classes.class2.date1.getDate(classes.class2.date1) + 28);
            // dates[0].push(class2);
            /* Class 2 */

            /* Class 3 */
            date.setDate(date.getDate() + 1);
            date.setHours(20, 00, 00);

            classes.class3 = {
                date1: new Date(date),
                date2: new Date(date),
                date3: new Date(date),
                date4: new Date(date),
                date5: new Date(date)
            }

            classes.class3.date2.setDate(classes.class3.date1.getDate(classes.class3.date1) + 7);
            classes.class3.date3.setDate(classes.class3.date1.getDate(classes.class3.date1) + 14);
            classes.class3.date4.setDate(classes.class3.date1.getDate(classes.class3.date1) + 21);
            classes.class3.date5.setDate(classes.class3.date1.getDate(classes.class3.date1) + 28);

            /* Class 3 */

            /* Class 4 */

            date.setDate(date.getDate() + 1);
            date.setHours(19, 30, 00);

            classes.class4 = {
                date1: new Date(date),
                date2: new Date(date),
                date3: new Date(date),
                date4: new Date(date),
                date5: new Date(date)
            }

            classes.class4.date2.setDate(classes.class4.date1.getDate(classes.class4.date1) + 7);
            classes.class4.date3.setDate(classes.class4.date1.getDate(classes.class4.date1) + 14);
            classes.class4.date4.setDate(classes.class4.date1.getDate(classes.class4.date1) + 21);
            classes.class4.date5.setDate(classes.class4.date1.getDate(classes.class4.date1) + 28);

            /* Class 4 */

            /* Class 5 */

            date.setHours(20, 30, 00);

            classes.class5 = {
                date1: new Date(date),
                date2: new Date(date),
                date3: new Date(date),
                date4: new Date(date),
                date5: new Date(date)
            }

            classes.class5.date2.setDate(classes.class5.date1.getDate(classes.class5.date1) + 7);
            classes.class5.date3.setDate(classes.class5.date1.getDate(classes.class5.date1) + 14);
            classes.class5.date4.setDate(classes.class5.date1.getDate(classes.class5.date1) + 21);
            classes.class5.date5.setDate(classes.class5.date1.getDate(classes.class5.date1) + 28);

            /* Class 5 */

            /* Class 6 */

            date.setDate(date.getDate() + 1);
            date.setHours(20, 00, 00);

            classes.class6 = {
                date1: new Date(date),
                date2: new Date(date),
                date3: new Date(date),
                date4: new Date(date),
                date5: new Date(date)
            }

            classes.class6.date2.setDate(classes.class6.date1.getDate(classes.class6.date1) + 7);
            classes.class6.date3.setDate(classes.class6.date1.getDate(classes.class6.date1) + 14);
            classes.class6.date4.setDate(classes.class6.date1.getDate(classes.class6.date1) + 21);
            classes.class6.date5.setDate(classes.class6.date1.getDate(classes.class6.date1) + 28);

            /* Class 6 */

            date = date.toISOString().substring(0, 19)
            console.log(classes)
            $http.post("http://pole2fitness.ddns.net/startNewblock", classes).then((result) => {
                console.log(result)
            })
        }
    });