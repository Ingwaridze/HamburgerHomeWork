class Hamburgers {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppingsArr = [];
  }
  addTopping(stuffing) {
    return this.toppingsArr.push(stuffing);
  }
  calculateCalories() {
    return this.size.calories + this.stuffing.calories;
  }
  calculatePrice() {
    return this.size.price + this.stuffing.price;
  }
}

SmallSize = {
  price: 50,
  calories: 20,
};
BigSize = {
  price: 100,
  calories: 40,
};
Cheese = {
  price: 10,
  calories: 20,
};
Salad = {
  price: 20,
  calories: 5,
};
Potato = {
  price: 15,
  calories: 10,
};
addSeasoning = {
  price: 15,
  calories: 0,
};
pourMayo = {
  price: 20,
  calories: 5,
};

const hamburger = new Hamburgers(SmallSize, Cheese);
console.dir(hamburger);
hamburger.addTopping(pourMayo);
console.dir(
  `Calorie content is your burger is ${hamburger.calculateCalories()}`
);
console.dir(`Total price for your burger is ${hamburger.calculatePrice()}`);
hamburger.addTopping(addSeasoning);
console.dir(
  `Your final price is ${hamburger.calculatePrice()}!Enjoy your meal!`
);
