"use strict";
/* 
 * @author Uri Shmueli
 */
var app = angular.module('app', []);
app.controller('myController', function ($scope) {
    $scope.gridBoxes = [1, 2, 3, 4, 5, 6];
    $scope.getNumberOfColumns = function () {
        var numberOfColumns = [];
        numberOfColumns.length = 3;
        return numberOfColumns;
    };

    $scope.getNumberOfRows = function () {
        var numberOfRows = [];
        numberOfRows.length = $scope.gridBoxes.length / 3;
        return numberOfRows;
    };
    
    var overOnX = -1;
    var overOnY = -1;
    $scope.onMouseOver = function(x,y) {
        overOnX = x;
        overOnY = y;
    };
    
    $scope.onMouseLeave = function() {
         overOnX = -1;
         overOnY = -1;
    };
    
    $scope.getCellStyle = function(x, y) {
        var backgroundColor = "#4F5D6A";
        if (x === overOnX && y === overOnY) {
            backgroundColor = "#405D6B";
        }
        var height = 100/$scope.getNumberOfRows().length+"%";
        var width = 100/$scope.getNumberOfColumns().length+"%";
        var rightBorder = "0px";
        if (x+1 < $scope.getNumberOfColumns().length) {
            rightBorder = "1px";
        }
        var bottomBorder = "0px";
        var marginBottom = "0px"; 
        if (y+1 < $scope.getNumberOfRows().length) {
            bottomBorder = "1px";
            marginBottom = "-1px";  // because the border takes space, we need to reduce it
           
        }
        console.log(overOnX+" "+overOnY+" bottomBorder="+bottomBorder);
        return {"height": height, "width": width,
            "border-right": "solid #374234",
            "border-bottom": "solid #374234",
            "border-right-width": rightBorder,
            "margin-bottom" : marginBottom,
            "border-bottom-width": bottomBorder
        };
    };
});
