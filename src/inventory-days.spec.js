const InventoryDays = require('./inventory-days');

describe(InventoryDays, () => {
  describe('#calculate', () => {
    it('returns number of days that grains will last for 1 child and 1 adult', () => {
      const stock = [
        {name: 'grains', quantity: 90},
      ];
      const people = [
        {gender: 'm', age: 2,},
        {gender: 'f', age: 34,},
      ];
      const inventoryDays = new InventoryDays();
      const categories = inventoryDays.calculate(stock, people);
      const grains = categories.find((category) => category.name === 'grains');
      expect(grains.days).toEqual(10);
    });

    it('returns number of days that grains will last for 1 child', () => {
      const stock = [
        {name: 'grains', quantity: 90},
      ];
      const people = [
        {gender: 'm', age: 2,},
      ];
      const inventoryDays = new InventoryDays();
      const categories = inventoryDays.calculate(stock, people);
      const grains = categories.find((category) => category.name === 'grains');
      expect(grains.days).toEqual(30);
    });

    it('fixed number of places on quantity', () => {
      const stock = [
        {name: 'grains', quantity: 10},
      ];
      const people = [
        {gender: 'm', age: 2,},
      ];
      const inventoryDays = new InventoryDays();
      const categories = inventoryDays.calculate(stock, people);
      const grains = categories.find((category) => category.name === 'grains');
      expect(grains.days).toEqual(3.3);
    });
  });
});
