"use strict";
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

            var draggingObject = {};

            scope.getNumberOfColumns = function () {
                var numberOfColumns = [];
                numberOfColumns.length = scope.columns;
                return numberOfColumns;
            };

            scope.startDragging = function (event) {
                if (scope.draggable === 'yes') { // the left hand size grid
                    draggingObject = {
                        multipleCellWidth: 2,
                        multipleCellHeight: 1
                    };

                    scope.$emit('gridBoxStartedDragging', draggingObject);
                }
            };

            if (scope.draggable === 'no') { // the "droppable" grid, the right hand side
                scope.$on('destinationDropping', function (e, data) {
                    draggingObject.multipleCellWidth = data.multipleCellWidth;
                    draggingObject.multipleCellHeight = data.multipleCellHeight;
                });

                scope.$on('destinationStoppedDropping', function () {
                    delete draggingObject.multipleCellWidth;
                });
            }

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
                var highlightX = 1;
                var highlightY = 1;
                if (angular.isDefined(draggingObject.multipleCellWidth) && scope.draggable === 'no') {
                    highlightX = draggingObject.multipleCellWidth;
                    highlightY = draggingObject.multipleCellHeight;
                }

                var backgroundColor = "#4F5D6A"; //TODO URI how to make it from css
                if (x >= overOnX && x < overOnX + highlightX && overOnX + highlightX <= scope.columns &&
                        y >= overOnY && y < overOnY + highlightY && overOnY + highlightY <= scope.rows)
                {
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


