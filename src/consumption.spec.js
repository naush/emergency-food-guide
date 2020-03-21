const Consumption = require('./consumption');

describe(Consumption, () => {
  describe('#ofDay', () => {
    it('for 1 day and 1 child', () => {
      const people = [
        {gender: 'm', age: 2,},
      ];

      const category = new Consumption(people)
        .ofDay(1).find((category) => category.name === 'grains');

      expect(category.quantity).toEqual(3)
    });

    it('for 1 day, 1 child, and 1 adult', () => {
      const people = [
        {gender: 'm', age: 2,},
        {gender: 'f', age: 34,},
      ];

      const category = new Consumption(people)
        .ofDay(1).find((category) => category.name === 'grains');

      expect(category.quantity).toEqual(9)
    });

    it('for 2 days, 1 child, and 1 adult', () => {
      const people = [
        {gender: 'm', age: 2,},
        {gender: 'f', age: 34,},
      ];

      const category = new Consumption(people)
        .ofDay(2).find((category) => category.name === 'grains');

      expect(category.quantity).toEqual(18)
    });
  });
})
