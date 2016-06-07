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
          total += item.item.price * item.quantity;
        });

        return total;
      },
      addItem: function(item, quantity) {
        let item2Add = {
          item: item,
          quantity: Number(quantity)
        }
        if (cart.length > 0) {
          let exists = false;
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].item._id === item._id) {
              cart[i].quantity += Number(quantity);
              exists = true
            }
          }
          if (!exists) {
            cart.push(item2Add);
          }
        }
        else {
          cart.push(item2Add);
        }
      },
      removeItem: function(index) {
        cart.splice(index, 1);
      }
    }
  }
})();
