const Consumption = require('./consumption');

describe(Consumption, () => {
  describe('#ofCategory', () => {
    it('finds category by name', () => {
      const people = [{gender: 'm', age: 2,}];
      const category = new Consumption(people).ofCategory('grains');

      expect(category.quantity).toEqual(3)
    });
  });

  describe('#byCategory', () => {
    it('for 1 day and 1 child', () => {
      const people = [{gender: 'm', age: 2,}];
      const categories = new Consumption(people).byCategory();
      const category = categories.find((category) => category.name === 'grains');

      expect(category.quantity).toEqual(3)
    });

    it('for 1 day, 1 child, and 1 adult', () => {
      const people = [
        {gender: 'm', age: 2,},
        {gender: 'f', age: 34,},
      ];

      const categories = new Consumption(people).byCategory();
      const category = categories.find((category) => category.name === 'grains');

      expect(category.quantity).toEqual(9)
    });
  });
})
