app.controller('CartController', CartController);

function CartController($scope, cartFactory) {
  $scope.vm = {};

  $scope.vm.getCartTotal = function() {
    return cartFactory.getCartTotal();
  };

  $scope.vm.cart = (function() {
    return cartFactory.getCart();
  })();

  $scope.vm.removeItem = function(item) {
    return cartFactory.removeItem(item);
  }
}
