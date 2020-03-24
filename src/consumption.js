class Consumption {
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

      return group ? group.quantity : 0;
    }).reduce((a, b) => a + b);
  }

  ofCategory(name) {
    return this.byCategory()
      .find((category) => category.name === name);
  }

  byCategory() {
    return self.tables.map((table) => {
      return {
        name: table.category,
        unit: table.unit,
        quantity: this.quantity(table),
      }
    });
  }
}

module.exports = Consumption;
