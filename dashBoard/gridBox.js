/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * TODO URI change templates
 * TODO URI add function() to wrap all functions
 */
var app = angular.module('dashBoard', []);
angular.module('dashBoard').directive('gridBox', function () {
    return {
        restrict: 'E',
        templateUrl: 'dashBoard/gridBox.html',
        replace: true,
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

            scope.startDragging = function (event) {
                scope.$emit('gridBoxStartedDragging', 'draggingObjectX');
            };

            scope.stopDragging = function () {
                scope.$emit('gridBoxStoppedDragging');
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


