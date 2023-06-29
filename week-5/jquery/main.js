const addToCart = (name) => $("#cart").append($(`<div>${name}</div>`));
$("body").on("click", ".item", function () {
  console.log($(this).data());
  if ($(this).data().instock) addToCart($(this).text());
});

const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" },
];
const colorText = (fruit) => $(`<div class=${fruit.color}>${fruit.name}</div>`);
for (const fruit of fruits) {
  $("#basket").append(colorText(fruit));
}

const addNameItem = (name) => `<li> ${name} </li>`;
$("body").append($('<input type="text" placeholder="Human Name">'));
$("body").append($("<button>Add Human</botton>"));
$("body").on("click", "button", () =>
  $("ul").append($(addNameItem($("input")[0].value)))
);
$("ul").on("click", "li", function () {
  $(this)[0].remove();
});
$("ul").append($(addNameItem("Quimby")));

$("body").append('<div class="box"></div>');
$("body").append('<div class="box"></div>');
$(".box").css("border-radius", "5px");
$(".box").css("box-shadow", "2px 2px 5px black");
$("body").on("mouseenter", ".box", function () {
  for (const box of $(".box")) {
    $(box).css("background-color", box === $(this)[0] ? "#8e44ad" : "red");
  }
});
