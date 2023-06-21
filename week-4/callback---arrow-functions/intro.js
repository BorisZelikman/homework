let users = [];

const getData = function (callback) {
  setTimeout(function () {
    users = [{ name: "Rick" }, { name: "Morty" }];
    console.log("Got users");
    callback();
  }, 3000);
};

// const displayData = function () {
//   console.log("Going to display users");
//   for (user of users) {
//     console.log(user.name);
//   }
// };

//getData(displayData);

//setInterval(() => console.log(new Date()), 1000);
const square = (number) => console.log(number * number);
square(4);

const getFormalTitle = (title, name) => title + " " + name;
formalTitle = getFormalTitle("Madamme", "Lellouche");
console.log(formalTitle); //returns "Maddame Lellouche"

const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};
/*
// Exercise 1
const pushPull = (callback) => callback();

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"

// Exercise 2
const returnTime = function (time) {
  alert("The current time is: " + time);
};

const getTime = function (callback) {
  callback(new Date().toLocaleTimeString());
};

getTime(returnTime);


// Exercise 3

const alert = function (data) {
  console.log("alert-" + data);
};
const logData = function (data) {
  console.log("logData-" + data);
};
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(alert, logData, "I like to party");

//Exercise 4
const sumOf3 = (num1, num2, num3) => num1 + num2 + num3;
console.log(sumOf3(1, 2, 3));

//Exercise 5
const capitalize = (text) =>
  console.log(text[0].toUpperCase() + text.substr(1).toLowerCase());
capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia

//Exercise 6
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (t) => console.log("It's " + determineWeather(t));
commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"

// Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

explode(shineLight, makeSound, "BOOM");

let x = {
  count: 12,
  go: () => {
    setTimeout(function () {
      console.log(this.count);
    }, 1500);
  },
};
x.go();

setInterval(() => {
  console.log("hi");
}, 2000);
*/
const run = (name) => {
  console.log("Run, " + name + ", run!");
};
const yell = function (action) {
  let env = "Forest";
  action(env);
};
run(yell);
