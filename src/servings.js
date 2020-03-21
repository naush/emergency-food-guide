class Servings {
  constructor(
    people,
    tables=require('./assets/tables')
  ) {
    self.people = people;
    self.tables = tables;
  }

  quantity(table) {
    return self.people.map((person) => {
      const group = table.groups.find((group) => {
        return (
          group.gender === person.gender &&
          person.age >= group.from_age &&
          person.age <= group.to_age
        );
      });

      return group.quantity;
    }).reduce((a, b) => a + b);
  }

  ofDay(days) {
    return self.tables.map((table) => {
      return {
        category: table.category,
        unit: table.unit,
        quantity: this.quantity(table) * days,
      }
    });
  }
}

module.exports = Servings;
