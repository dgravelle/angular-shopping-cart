'use strict';

app.factory('cartFactory', function() {
  let cart = [];
  return {
    getCart: function() {
      return cart;
    },
    getTotal: function() {
      return cart.length;
    },
    getSubTotal: function() {

    },
    addItem: function(item, quantity) {
      let item2Add = {
        item: item,
        quantity: Number(quantity)
      }
      cart.push(item2Add);
    },
    removeItem: function() {

    },
    updateItemQuantity: function() {

    }
  }
});
