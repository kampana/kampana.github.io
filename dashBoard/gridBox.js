/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * TODO URI change templates
 * TODO URI add function() to wrap all functions
 */
angular.module('dashBoard', [])
        .controller('dashBoardController', ['$scope', function ($scope) {
            }]).directive('gridBox', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'dashBoard/gridBox.html',
        scope: {
            rows: "@",
            columns: "@",
            draggable: "@" // yes = dragging from, no = dropping to
        },
        link: function (scope) {
            scope.getNumberOfColumns = function () {
                var numberOfColumns = [];
                numberOfColumns.length = scope.columns;
                return numberOfColumns;
            };
            
            var duringDragging = false;
            
            scope.isDuringDragging = function() {
                return duringDragging;
            };
            
            var mousePosX = 0;
            var mousePosY = 0;
            
            scope.getDraggingClass = function () {
                if (duringDragging) {
                    console.log("during dragging");
                    return {
                        "background-color": "red",
                        "width": "50px",
                        "position": "absolute",
                        "left": mousePosX+100+"px",
                        "top": mousePosY+"px"
                    };
                } else {
                    return {};
                }
            };

            scope.startDragging = function(event) {
                duringDragging = true;
                mousePosX = event.x;
                mousePosY = event.y;
            };
            
            scope.onMouseMove = function(event) {
                mousePosX = event.x;
                mousePosY = event.y;
            };
            
            scope.stopDragging = function() {
                console.log("stoppED!");
                duringDragging = false;
            };

            scope.getNumberOfRows = function () {
                var numberOfRows = [];
                numberOfRows.length = scope.rows;
                return numberOfRows;
            };

            var overOnX = -1;
            var overOnY = -1;
            scope.onMouseOver = function (x, y) {
                overOnX = x;
                overOnY = y;
            };

            scope.onMouseLeave = function () {
                overOnX = -1;
                overOnY = -1;
            };

            scope.getCellStyle = function (x, y) {
                var backgroundColor = "#4F5D6A"; //TODO URI how to make it from css
                if (x === overOnX && y === overOnY) {
                    backgroundColor = "#316777";
                }
                var height = 100 / scope.rows + "%";
                var width = 100 / scope.columns.length + "%";
                var rightBorder = "0px";
                if (x + 1 < scope.columns) {
                    rightBorder = "1px";
                }
                var bottomBorder = "0px";
                if (y + 1 < scope.rows) {
                    bottomBorder = "1px";

                }
                return {"height": height, "width": width,
                    "border-right": "solid #374234",
                    "border-bottom": "solid #374234",
                    "border-right-width": rightBorder,
                    "border-bottom-width": bottomBorder,
                    "background-color": backgroundColor
                };
            };
        }
    };
});


