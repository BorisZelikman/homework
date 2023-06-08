let boughtTesla = true;
let yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2023;
let str = prompt("Do you previously bought a Tesla?");
boughtTesla = str[0] === "y";
console.log(str + " str[0]:" + str[0]);
if (boughtTesla) {
  console.log("bought a Tesla");
  str = prompt("Are you a US citizen?");
  isUSCitizen = str[0] === "y";
  if (isUSCitizen) {
    console.log("US citizen");
    yearOfTeslaPurchase = prompt("when did you bought a Tesla?");
    if (currentYear - yearOfTeslaPurchase >= 4) {
      console.log("Would you like an upgrade?");
    } else {
      console.log("Are you satisfied with the car?");
    }
  } else {
    console.log("not a US citizen");
    console.log("would like to move to the US?");
  }
} else {
  console.log("would like to buy Tesla?");
}
