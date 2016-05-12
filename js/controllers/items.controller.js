app.controller('ItemsController', ItemsController);

function ItemsController($scope, itemsFactory) {
  vm = this;

  $scope.vm.items = itemsFactory.getItems(); 
}
