/**
 * Created by Vasili Kisel on 7/10/2016.
 */
angular.module('weatherapp')
    .directive('searchOutputDirect', function () {
        return {
            restrict: 'E',
            //template: "<p>hello world</p>",
            templateUrl: "src/templateDirective/searchCard.html"
            //,
            //replace: true
            //,
            //transclude: true
        }
    });