(function () {
  'use strict';

  angular
    .module('app')
    .factory('cartFactory', cartFactory)

  function cartFactory() {
    let cart = [];
    return {
      getCart: function() {
        return cart;
      },
      getLength: function() {
        return cart.length;
      },
      getCartTotal: function() {
        let total = 0;

        cart.forEach(function(item) {
          console.log(item);
          total += item.item.price * item.quantity;
        });
        console.log(total);
        return total;
      },
      addItem: function(item, quantity) {
        let item2Add = {
          item: item,
          quantity: Number(quantity)
        }
        cart.push(item2Add);
      },
      removeItem: function(index) {
        console.log(index);
        cart.splice(index, 1);
      },
      updateItemQuantity: function() {

      }
    }
  }
})();
