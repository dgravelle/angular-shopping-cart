var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/items-table.html',
      controller: 'ItemsController'
    })
    .when('/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'CartController'
    })
})
