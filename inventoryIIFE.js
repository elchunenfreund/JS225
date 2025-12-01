/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
let ItemManager = (function() {
  let items = []; // Private collection

  function findItemBySku(skuCode) {
    return items.find((item) => item.skuCode === skuCode);
  }

  function findItemIndexBySku(skuCode) {
    return items.findIndex((item) => item.skuCode === skuCode);
  }

  return {
    create: function(itemName, category, quantity) {
      const validItemName = itemName.replace(/\s/g, '').length >= 5;
      const validCategory = category.length >= 5 && !/\s/.test(category);
      const validQuantity = typeof quantity === 'number' && quantity >= 0;

      if (!validItemName || !validCategory || !validQuantity) {
        return false;
      }

      const skuCode = (itemName.replace(/\s/g, '').slice(0, 3) + category.slice(0, 2)).toUpperCase();
      let existingItem = findItemBySku(skuCode);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.push({
          skuCode,
          itemName,
          category,
          quantity,
        });
      }
      return true;
    },

    update: function(skuCode, itemInformation) {
      let item = findItemBySku(skuCode);
      if (item) {
        Object.assign(item, itemInformation);
      }
    },

    delete: function(skuCode) {
      let index = findItemIndexBySku(skuCode);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },

    items() {
      return items.slice();
    },

    inStock() {
      return items.filter((item) => item.quantity > 0);
    },

    itemsInCategory(category) {
      return items.filter((item) => item.category === category);
    },
  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking', 5);          // valid item
ItemManager.create('bad item', 'sports', 0);              // invalid item name
ItemManager.create('soccer ball', 'sports', 10);          // updates quantity of existing item
console.log(ItemManager.items());
// logs:
// [
//   { skuCode: 'BASSP', itemName: 'basket ball', category: 'sports', quantity: 0 },
//   { skuCode: 'SOCSP', itemName: 'soccer ball', category: 'sports', quantity: 15 },
//   { skuCode: 'FOOSP', itemName: 'football', category: 'sports', quantity: 3 },
//   { skuCode: 'KITCO', itemName: 'kitchen pot', category: 'cooking', quantity: 5 },
// ]

ItemManager.delete('SOCSP');
console.log(ItemManager.items());
// logs:
// [
//   { skuCode: 'BASSP', itemName: 'basket ball', category: 'sports', quantity: 0 },
//   { skuCode: 'FOOSP', itemName: 'football', category: 'sports', quantity: 3 },
//   { skuCode: 'KITCO', itemName: 'kitchen pot', category: 'cooking', quantity: 5 },
// ]

let kitchenPot = ItemManager.items().filter(item => item.skuCode === 'KITCO')[0];
ItemManager.update('KITCO', { quantity: 10 });
console.log(ItemManager.items());
// logs:
// [
//   { skuCode: 'BASSP', itemName: 'basket ball', category: 'sports', quantity: 0 },
//   { skuCode: 'FOOSP', itemName: 'football', category: 'sports', quantity: 3 },
//   { skuCode: 'KITCO', itemName: 'kitchen pot', category: 'cooking', quantity: 10 },
// ]

console.log(ItemManager.inStock());
// logs:
// [
//   { skuCode: 'FOOSP', itemName: 'football', category: 'sports', quantity: 3 },
//   { skuCode: 'KITCO', itemName: 'kitchen pot', category: 'cooking', quantity: 10 },
// ]

console.log(ItemManager.itemsInCategory('sports'));
// logs:
// [
//   { skuCode: 'BASSP', itemName: 'basket ball', category: 'sports', quantity: 0 },
//   { skuCode: 'FOOSP', itemName: 'football', category: 'sports', quantity: 3 },
// ]
