angular.module('app')
    .directive('propertyModal', function() {
      return {
          restrict: 'E',
          templateUrl: './js/directives/property-modal/property-modal.html',
          scope: {
            property: '='
          },
          link: function(scope, elem, attrs) {

          }
      };
    });
