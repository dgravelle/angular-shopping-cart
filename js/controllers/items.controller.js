app.controller('ItemsController', ItemsController);

function ItemsController($scope, itemsFactory, cartFactory) {
  $scope.vm = {};

  $scope.vm.items = itemsFactory.getItems();

  $scope.vm.cartTotal = function() {
    console.log('checking');
    return cartFactory.getTotal();
  };

  $scope.vm.addToCart = function(item, quantity) {
    cartFactory.addItem(item, quantity);
    $scope.vm.cartTotal();
  }
}
