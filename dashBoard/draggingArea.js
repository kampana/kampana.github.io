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
        link: function (scope, element) {

            var mousePosX = -1;
            var mousePosY = -1;
            var duringDragging = false;
            var draggedObject;
            var gridBoxWidth = -1;
            var gridBoxHeight = -1;
            
            scope.$on('gridBoxStartedDragging', function (e, data) {
                draggedObject = data;
                // Calculate the size of the right hand cell
                var gridBoxCell = angular.element(document.querySelector('#draggableCell-no'))[0];
                gridBoxWidth = gridBoxCell.offsetWidth;
                gridBoxHeight = gridBoxCell.offsetHeight;
            });

            scope.$on('gridBoxStoppedDragging', function () {
                draggedObject = null;
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
                var multipleCellWidth = 1; // takes 1 cell in width
                var multipleCellHeight = 1; // takes 1 cell in height
                
                if (scope.isDuringDragging()) {
                    if (draggedObject === 'draggingObjectX') {
                        multipleCellWidth = 2;
                        multipleCellHeight = 2;
                    }
                    return {
                        "background-color": "red",
                        "width": multipleCellWidth*gridBoxWidth-2+"px",
                        "height": multipleCellHeight*gridBoxHeight-2+"px", //TODO URI handle use case when the taking the div too low
                        "position": "absolute",
                        "left": mousePosX + 10 + "px",
                        "top": mousePosY + "px",
                        "opacity":"0.1"
                    };
                } else {
                    return {};
                }
            };

            scope.isDuringDragging = function () {
                return duringDragging && mousePosX > 0 && draggedObject !== null;
            };

        }
    };
});
