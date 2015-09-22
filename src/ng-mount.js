/**
 * General-purpose plugin loader. Bind any loading function
 * (typically of jQuery's plugins) to Angular's link function for
 * the plugins initialization on DOM elements.
 *
 * @example <div ng-mount="{ plugin : 'pluginName', params : {width: 500} }">
 *
 */
angular.module('ngMount',[])

    .directive('ngMount', function($timeout) {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'A',
            // responsible for registering DOM listeners as well as updating the DOM
            link: function(scope, element, attrs) {
                $timeout(function () {
                    $(element)[scope.$eval(attrs.ngMount).plugin](scope.$eval(attrs.ngMount).params);
                });
            }
        };
    });