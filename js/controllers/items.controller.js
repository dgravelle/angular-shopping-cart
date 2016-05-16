(function () {
  'use strict'

  angular
    .module('app')
    .controller('ItemsController', ItemsController);

  function ItemsController($scope, itemsFactory, cartFactory) {
    $scope.vm = {};
    $scope.itemsFactory = itemsFactory;
    console.log($scope.itemsFactory);
    $scope.vm.items = itemsFactory.getItems();

    $scope.vm.cartTotal = function() {
      console.log('checking');
      return cartFactory.getLength();
    };

    $scope.vm.addToCart = function(item, quantity) {
      cartFactory.addItem(item, quantity);
      $scope.vm.cartTotal();
    }
  }
})();
