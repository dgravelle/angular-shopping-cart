// (function () {
  app
    .controller('Nav', Nav);

  function Nav($scope, $location, cartFactory) {
      $scope.nav = {}
      $scope.nav.active = $location.path();
      $scope.nav.cartTotal = function() {
        console.log('checking');
        return cartFactory.getLength();
      };
  }

// });
