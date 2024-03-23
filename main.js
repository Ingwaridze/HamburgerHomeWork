// function Person(name, lastName, age) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
// }
// const person = new Person(`Igor`, `Kutsenko`, 28);
// const person2 = new Person(`Vasyl`, `Vasyliev`, 25);
// console.log(person);
// console.log(person2);
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.constructor = function () {
//     return console.log(`${this.name} and ${this.age}`);
//   };
// }

// const homework = new Person("Igor", 28);
// console.log(homework);

// function Car(brand, model, year, milleage) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.milleage = milleage;

//   const Owner = function () {
//     if (owner.age < 18) {
//       console.log("Owner must be more than 18!");
//     } else {
//       this.ownerName = owner;
//       console.log(`Owner of auto: ${owner.name}`);
//     }
//   };
//   this.Information = function autoInfo() {
//     console.log(
//       `Info about auto: ${this.brand} ${this.model} ${this.year} ${this.number} ${this.ownerName.name}`
//     );
//     this.ownerName
//       ? this.ownerName.personInfo
//       : console.log(`${this.brand}-${this.number} does not have the owner`);
//   };
//   let person1 = new Person("Adam Smith", 25);
//   let person2 = new Person("Rada Mitchell", 30);
//   let person3 = new Person("Wednesday Adams", 16);

//   let auto1 = new Auto("Mazda", "Supra", 2015, "BA3412RR");
//   let auto2 = new Auto("Huinday", "Elantra", 2017, "AA3564CV");

//   auto1.addOwner(person1);
//   auto2.addOwner(person2);
//   auto2.addOwner(person3);

//   auto1.autoInfo;
//   auto2.autoInfo;
// }

// class Person {
//   lastName;
//   localtoDo = () => {
//     console.log(this, `----this`);
//   };
//   constructor(name, lastName) {
//     console.log(`-------`, this);
//     this.name = name;
//     this.lastName = lastName;
//     this.instMethod = function () {};
//   }
//   toDo() {}
// }

// const person = new Person(`Igor`, `kutsenko`);

// class Vehicle {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   displayInfo() {
//     console.log(`
//     brand => ${this.brand}
//     model =>${this.model}
//     year => ${this.year}
//     `);
//   }
// }
// // const transport = new Vehicle(`Mercedes`, `C43`, 2023);
// // console.log(transport);
// class Helicopter extends Vehicle {
//   constructor(blades) {
//     this.blades = blades;
//   }
// }
// class Car extends Vehicle {
//   #distance = 10;
//   constructor(brand, model, year, wheel) {
//     super(brand, model, year);
//     this.wheel = wheel;
//   }
//   drive() {}

//   displayInfo() {
//     // console.log(`
//     // brand => ${this.brand}
//     // model =>${this.model}
//     // year => ${this.year}
//     // `);
//     super.displayInfo();
//     console.log(`wheels =>${this.wheel}`);
//   }
// }
// const transport = new Car(`Mercedes`, `C43`, 2023, 5);
// console.log(transport);
// transport.distance;

// const id = document.getElementById(`logo`);
// console.dir(id);
// const q = document.querySelector(`#logo`);
// console.log(q);

//------------------на следующий урок
// const block = document.querySelector(`div.block`);

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
