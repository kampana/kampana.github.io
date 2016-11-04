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
            isDropped: "&",
            draggable: "@" // yes = dragging from, no = dropping to
        },
        //TODO URI add controller
        link: function (scope) {
            var draggingObject = {};
            var objectDropped = [];

            // Mouse hover positions
            var overOnX = -1;
            var overOnY = -1;


            // Mark the element if its dropped for future queryElement
            scope.isDropped = function (x, y) {
                var returnVal = "no";
                objectDropped.forEach(function (element) {
                    // Mark the dropped cell and all the following spanned in the element
                    if (x >= element.x && x < element.x + element.multipleCellWidth &&
                            y >= element.y && y < element.y + element.multipleCellHeight) {
                        returnVal = "yes";
                    }
                });

                return returnVal;
            };

            // Return the number of columns for the ng-repeat
            scope.getNumberOfColumns = function () {
                var numberOfColumns = [];
                numberOfColumns.length = scope.columns;
                return numberOfColumns;
            };

            // Return the number of rows for the ng-repeat
            scope.getNumberOfRows = function () {
                var numberOfRows = [];
                numberOfRows.length = scope.rows;
                return numberOfRows;
            };
            
            // Mouse started dragging, and notify the dragging area directive
            scope.startDragging = function (event) {
                if (scope.draggable === 'yes') { // the left hand size grid
                    draggingObject = {
                        multipleCellWidth: 2,
                        multipleCellHeight: 1
                    };

                    scope.$emit('gridBoxStartedDragging', draggingObject);
                }
            };

            // If its a droppable grid, listen to the dropping events
            if (scope.draggable === 'no') { // the "droppable" grid, the right hand side
                scope.$on('destinationDropping', function (e, data) {
                    draggingObject.multipleCellWidth = data.multipleCellWidth;
                    draggingObject.multipleCellHeight = data.multipleCellHeight;
                });

                // Object dropped
                scope.$on('objectDropped', function () {
                    // save the dropped object
                    objectDropped.push({
                        x: overOnX,
                        y: overOnY,
                        multipleCellWidth: draggingObject.multipleCellWidth,
                        multipleCellHeight: draggingObject.multipleCellHeight
                    });

                    delete draggingObject.multipleCellWidth; // clear the dragging object
                });
            }

            // Mouse stopped dragging
            scope.stopDragging = function () {
                scope.$emit('gridBoxStoppedDragging');
            };

            // Mouse hover started event
            scope.onMouseOver = function (x, y) {
                overOnX = x;
                overOnY = y;
            };

            // Mouse hover finished event
            scope.onMouseLeave = function () {
                overOnX = -1;
                overOnY = -1;
            };

            // In case the object dropped, we want to hide the relevant cells in the grid
            // connected to gridBox.html->ngShow
            scope.isShowing = function (x, y) {
                var returnValue = true;
                if (objectDropped.length > 0) {
                    objectDropped.forEach(function (element) {
                        if (x > element.x && x < element.x + element.multipleCellWidth &&
                                y >= element.y && y < element.y + element.multipleCellHeight) {
                            returnValue = false;
                        }
                    });
                }
                return returnValue;
            };

            // Makes the relevant style to the cell. gridBox.html->ngStyle
            scope.getCellStyle = function (x, y) {
                var highlightX = 1;
                var highlightY = 1;
                if (angular.isDefined(draggingObject.multipleCellWidth)
                        && angular.isDefined(scope.draggable) &&
                        scope.draggable === 'no') {
                    highlightX = draggingObject.multipleCellWidth;
                    highlightY = draggingObject.multipleCellHeight;
                }

                var backgroundColor = "#4F5D6A"; //TODO URI how to make it from css
                if (x >= overOnX && x < overOnX + highlightX && overOnX + highlightX <= scope.columns &&
                        y >= overOnY && y < overOnY + highlightY && overOnY + highlightY <= scope.rows)
                {
                    backgroundColor = "#316777";
                }
                var height = 100 / scope.rows;
                var width = 100 / scope.columns;

                if (objectDropped.length > 0) {
                    var singleCellWidth = width;

                    objectDropped.forEach(function (element) {
                        if (x === element.x && y === element.y) {
                            width = singleCellWidth * element.multipleCellWidth;
                        }
                    });
                }
                //TODO URI bug when dragging on first row and then second row

                width = width + "%";
                height = height + "%";

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


