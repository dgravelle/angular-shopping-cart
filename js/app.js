var app = angular.module('app', ['ngRoute']);

app.config(function($location, $routeProvider, $routeParams) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/items-table.html',
      controller: 'ItemsController'
    })
})
