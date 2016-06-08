(function () {

  angular
    .module('app')
    .directive('caffeineMeter', caffeineMeter);


  function caffeineMeter() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/caffeine-meter.html',
      scope: {
        caffeineMg: '=caffeineMg'
      },
      link: function(scope, element, attrs) {
        scope.caffeineMeter = (Math.round((scope.caffeineMg / 300) * 179) + 1) + 'deg';
        scope.caffeineRating = function(mg) {
          if (mg < 100) {
            return 'LOW'
          }
          else if ( mg > 100 && mg < 200) {
            return 'MEDIUM'
          }
          else {
            return 'HIGH'
          }
        }

      }
    }
  }

})()
