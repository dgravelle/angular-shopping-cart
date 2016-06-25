(function () {
  'use strict'

  angular
    .module('app')
    .controller('ItemsController', ItemsController);

  function ItemsController($scope, itemsFactory, cartFactory) {
    $scope.vm = {};
    $scope.itemsFactory = itemsFactory;

    $scope.vm.items = itemsFactory.getItems();

    $scope.vm.cartTotal = function() {
      return cartFactory.getLength();
    };

    $scope.vm.addToCart = function(item, quantity) {
      cartFactory.addItem(item, quantity);
      item.quantity = 0;
      $scope.vm.cartTotal();
    }
  }
})();
