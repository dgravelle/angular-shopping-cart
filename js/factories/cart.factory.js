'use strict';

app.factory('cartFactory', function() {
  let cart = [];
  return {
    getTotal: function() {
      return cart.length;
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
