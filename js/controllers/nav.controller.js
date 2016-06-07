(function () {
  'use strict'

  angular
    .module('app')
    .controller('Nav', Nav);

  function Nav($scope, $location, cartFactory) {

      $scope.nav = {}
      
      $scope.nav.cartTotal = function() {
        return cartFactory.getLength();
      };
  }

})();
