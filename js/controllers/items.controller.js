app.controller('ItemsController', ItemsController);

function ItemsController($scope, itemsFactory) {
  $scope.vm = {};

  console.log(itemsFactory.getItems());
  $scope.vm.items = itemsFactory.getItems();
}
