




/*class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }

  giveBirth(name) {
    this.children.push(name);
  }
}
const dog = new Animal("dog", 4);
console.log(dog.name);

class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const boy = new Human("John", 12, false);
console.log(
  `${boy.name} is ${boy.age} years old. Is` +
    (!boy.isFriendly ? " not" : "") +
    " friendly"
);

class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel;
    Vehicle.sold++;
  }
  set speed(speed) {
    if (speed < 0) console.log("-");
    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }

  get fuel() {
    return this.value;
  }
  set fuel(value) {
    if (value < 0 || value > 150) console.log("fuel must be 0-150");
    this._fuel = value;
  }

  static getInfo = () => {
    return `Sold ${Vehicle.sold} cars`;
  };
  static calculateMoney = () => {
    return `Made ${30000 * Vehicle.sold}$`;
  };
}
Vehicle.sold = 0;
let l = new Vehicle();
console.log(l.x, l.y, l._speed);
l.speed = -4;
console.log(l.x, l.y, l._speed);
l = new Vehicle(3);
console.log(l.x, l.y, l.speed);
l = new Vehicle(2, 3);
console.log(l.x, l.y, l.speed);
console.log(Vehicle.getInfo());
console.log(Vehicle.calculateMoney());
*/