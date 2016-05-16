(function () {
  'use strict'

  angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
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
})();
