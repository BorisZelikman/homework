// Exercise 1
let p1 = {
  name: "Boris",
  age: 4,
  city: "Rehovot",
};
let p2 = {
  name: "Adam",
  age: 48,
  city: "Rehovot",
};
console.log(
  p1.age == p2.age
    ? "same age"
    : (p1.age > p2.age ? p1.name : p2.name) + " elder"
);
if (p1.city == p2.city) console.log(p1.name + " wanted to date " + p2.name);
else console.log(p1.name + " wanted to date " + p2.name + ", but couldn’t");

// Exercise 2
let library = {
  books: [
    { title: "About Me", author: "Jerom" },
    { title: "About World", author: "Someoneelse" },
  ],
};
console.log(library.books[0].author);

// Exercise 3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const name = prompt("Please enter the name for your reservation").toLowerCase();

if (reservations[name]) {
  if (!reservations[name].claimed) alert(`Welcome, ${name}`);
  else alert(`Hmm, someone already claimed this reservation`);
} else {
  alert(`You have no reservation`);

  // Exercise 3.1
  reservations[name] = { claimed: true };
  console.log(reservations);
}
