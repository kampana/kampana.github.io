/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('dashBoard').directive('draggingArea', function () {
    return {
        restrict: 'E',
        templateUrl: 'dashBoard/draggingArea.html',
        transclude: true,
        link: function (scope) {

            var mousePosX = -1;
            var mousePosY = -1;
            var duringDragging = false;

            scope.$on('gridBoxStartedDragging', function (e, data) {
            });

            scope.$on('gridBoxStoppedDragging', function () {
                
            });

            scope.startDragging = function (event) {
                duringDragging = true;
            };

            scope.stopDragging = function () {
                duringDragging = false;
                mousePosX = -1;
                mousePosY = -1;
            };

            scope.onMouseMove = function (event) {
                if (duringDragging) {
                    mousePosX = event.x;
                    mousePosY = event.y;
                }
            };

            scope.getDraggingClass = function () {
                if (duringDragging && mousePosX > 0) {
                    return {
                        "background-color": "red",
                        "width": "50px",
                        "position": "absolute",
                        "left": mousePosX + 10 + "px",
                        "top": mousePosY + "px",
                    };
                } else {
                    return {};
                }
            };

            scope.isDuringDragging = function () {
                return duringDragging && mousePosX > 0;
            };

        }
    };
});

