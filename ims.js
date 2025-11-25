/* eslint-disable max-lines-per-function */
const ItemCreator = (function() {
  function isValidItemName(name) {
    return name.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return category.split(' ').length === 1 && category.length >= 5;
  }

  function isQuantityProvided(qty) {
    return qty !== undefined;
  }

  function generateSkuCode(itemName, category) {
    const namePart = itemName.replace(/\s/g, '').slice(0, 3).toUpperCase();
    const catPart  = category.replace(/\s/g, '').slice(0, 2).toUpperCase();
    return namePart + catPart;
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category)
      && isQuantityProvided(quantity)) {
      return {
        skuCode: generateSkuCode(itemName, category),
        itemName,
        category,
        quantity,
      };
    }
    return { notValid: true };
  };
})();

const ItemManager = {
  items: [],
  getItem(skuCode) {
    return this.items.find(item => item.skuCode === skuCode);
  },
  create(itemName, category, quantity) {
    const item = ItemCreator(itemName, category, quantity);
    if (item.notValid) return false;
    this.items.push(item);
  },

  update(skuCode, updates) {
    let item = this.getItem(skuCode);
    if (item) Object.assign(item, updates);
  },
  inStock() {
    return this.items.filter(({ quantity }) => quantity > 0);
  },

  delete(skuCode) {
    let index = this.items.indexOf(this.getItem(skuCode));
    this.items.splice(index, 1);
  },
  itemsInCategory(category) {
    return this.items.filter((item) => item.category === category);
  },
};

const ReportManager = {
  items: null,
  init(obj) {
    this.items = obj;
  },
  reportInStock() {
    console.log(this.items.inStock().map(({ itemName }) => itemName).join(','));
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);
    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      },
    };
  }
};

ItemManager.create('basket ball', 'sports', 0);       // valid
ItemManager.create('asd', 'sports', 0);               // invalid (too short)
ItemManager.create('soccer ball', 'sports', 5);       // valid
ItemManager.create('football', 'sports');             // invalid (no quantity)
ItemManager.create('football', 'sports', 3);          // valid
ItemManager.create('kitchen pot', 'cooking items', 0);// invalid (category has space)
ItemManager.create('kitchen pot', 'cooking', 3);      // valid

ItemManager.items;
// => list with 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs: soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// => football, kitchen pot

ReportManager.reportInStock();
// logs: football,kitchen pot

ItemManager.itemsInCategory('sports');
// => basket ball, soccer ball, football

ItemManager.delete('SOCSP');
ItemManager.items;
// => remaining 3 valid items (soccer ball removed)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs:
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs:
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
