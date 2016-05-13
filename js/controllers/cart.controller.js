app.controller('CartController', CartController);

function CartController($scope, cartFactory) {
  $scope.vm = {};

  $scope.vm.cart = (function() {
    return cartFactory.getCart();
  })();

}
