// Exercise 1
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];
for (const i in names) {
  people.push({ name: names[i], age: ages[i] });
}
console.log(people);

// Exercise 2 (Extra Practice)
for (person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}

// Exercise 3
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];
const toDelete = [];
for (let index in posts) {
  if (posts[index].text.toUpperCase().search("DON'T BUY") >= 0)
    toDelete.push(index);
}
for (let i of toDelete) posts.splice(i + 1, 1);
console.log(posts);

// Exercise 4
const posts4 = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];
const indexOfPost = posts4.findIndex(
  (post) => post.text.toUpperCase().search("DON'T BUY") >= 0
);
//const indexOfPost=posts4.findIndex(post=>post.id===2)
const indexOfComment = posts4[indexOfPost].comments.findIndex(
  (comment) => posts4[indexOfPost].comments.id === 3
);
posts4[indexOfPost].comments.splice(indexOfComment, 1);
console.log(posts4);

// Extension
const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};
for (const key of Object.keys(dictionary)) {
  console.log(`Words that begin with ${key}`);
  for (const word of Object.values(dictionary[key])) {
    console.log(`     ${word}`);
  }
}
