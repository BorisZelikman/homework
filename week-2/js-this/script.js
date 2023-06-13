/*// Exercise 1
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      alert("Im no longer hungry!");
    }
  },
};

person.feed(); //should alert "I'm no longer hungry"

// Exercise 2
const pump = function (amount) {
  this.liters += amount;
  console.log("You put " + amount + " liters in " + this.name);
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);

// Exercise 3 -----------------
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fly: function () {
    if (this.fuel < 2) {
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
  fuel: 0,
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());

// Exercise 4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (minusValue) {
    this.coinCount -= minusValue
  },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);


// Exercise 5
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  alert(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that.",
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);
*/

// Exercise 6
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (drinkType == "filtered") alert("Sorry, we don't make filtered");
    else {
      console.log(
        `${drinkType}-${this.drinkRequirements[drinkType]}   ${this.beans}`
      );
      this.beans -= this.drinkRequirements[drinkType];
    }
    if (this.beans <= 0) alert("Sorry, we're all out of beans");
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


/*
// Exercise 6.1
const coffeeShop1 = {
  beans: 40,
  money: 0,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  buyBeans: function (numBeans) {
    this.beans += numBeans;
    this.money -= numBeans / 2;
  },
  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (this.beans <= this.drinkRequirements[drinkType] && this.money > 20)
      this.buyBeans(40);
    else if (drinkType == "filtered")
      console.log("Sorry, we don't make filtered");
    else {
      this.money += this.drinkRequirements[drinkType];
      this.beans -= this.drinkRequirements[drinkType];
      console.log(
        `${drinkType}-${this.drinkRequirements[drinkType]} beans:${this.beans}; money:${this.money}`
      );
    }
    if (this.beans <= 0) alert("Sorry, we're all out of beans");
  },
};

coffeeShop1.makeDrink("latte");
coffeeShop1.makeDrink("americano");
coffeeShop1.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop1.makeDrink("doubleShot");
coffeeShop1.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

// Exercise 6.2
const coffeeShop2 = {
  beans: 40,
  money: 0,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 20 },
    americano: { beanRequirement: 5, price: 10 },
    doubleShot: { beanRequirement: 10, price: 15 },
    frenchPress: { beanRequirement: 10, price: 15 },
  },

  buyDrink: function (drinkType) {
    this.beans -= this.drinkRequirements[drinkType].beanRequirement;
    this.money += this.drinkRequirements[drinkType].price;
  },
  makeDrink: function (drinkType) {
    if (drinkType == "filtered") {
      console.log("Sorry, we don't make filtered");
      return;
    }
    if (
      this.beans <= this.drinkRequirements[drinkType].drinkRequirements &&
      this.money > 20
    )
      this.buyBeans(40);
    this.buyDrink(drinkType);
    console.log(`${drinkType}- beans:${this.beans}; money:${this.money}`);
    if (this.beans <= 0) alert("Sorry, we're all out of beans");
  },
};

coffeeShop2.makeDrink("latte");
coffeeShop2.makeDrink("americano");
coffeeShop2.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop2.makeDrink("doubleShot");
coffeeShop2.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
*/