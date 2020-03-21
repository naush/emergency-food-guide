const Servings = require('./servings');

describe(Servings, () => {
  describe('#ofDay', () => {
    it('for 1 day and 1 child', () => {
      const people = [
        {gender: 'm', age: 2,},
      ];

      const serving = new Servings(people)
        .ofDay(1).find((serving) => serving.category === 'grains');

      expect(serving.quantity).toEqual(3)
    });

    it('for 1 day, 1 child, and 1 adult', () => {
      const people = [
        {gender: 'm', age: 2,},
        {gender: 'f', age: 34,},
      ];

      const serving = new Servings(people)
        .ofDay(1).find((serving) => serving.category === 'grains');

      expect(serving.quantity).toEqual(9)
    });

    it('for 2 days, 1 child, and 1 adult', () => {
      const people = [
        {gender: 'm', age: 2,},
        {gender: 'f', age: 34,},
      ];

      const serving = new Servings(people)
        .ofDay(2).find((serving) => serving.category === 'grains');

      expect(serving.quantity).toEqual(18)
    });
  });
})
