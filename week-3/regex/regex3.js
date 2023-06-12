const email1 = "cat@meow.com";
const email2 = "bad1npuT!@gmail.com";
const email3 = "meow@gmail.net";

const emailValidator = function (str) {
  /**
   * returns true if email prefix and domain is made strictly out of letters , the email must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
  return str.match(/[A-z]+@[A-z]+\.com$/) !== null;
};

console.log(emailValidator(email1)); //return true
console.log(emailValidator(email2)); //return true !!!! FALSE "!"
console.log(emailValidator(email3)); //return false
