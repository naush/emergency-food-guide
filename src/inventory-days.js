const Consumption = require('./consumption');

class InventoryDays {
  inStockQuantity(stock, name) {
    const category = stock.find((category) => category.name === name)
    if (category) {
      return category.quantity;
    } else {
      return 0;
    }
  }

  calculate(stock, people) {
    const consumption = new Consumption(people);
    const categories = consumption.byCategory();

    return categories.map((category) => {
      return {
        name: category.name,
        days: parseFloat((this.inStockQuantity(stock, category.name) / category.quantity).toFixed(1)),
      }
    });
  }
}

module.exports = InventoryDays;
