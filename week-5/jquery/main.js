// Ex.1, 2 =============
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

// Ex.3 ================
$("body").append('<div class="box"></div>');
$("body").append('<div class="box"></div>');
$(".box").css("border-radius", "5px");
$(".box").css("box-shadow", "2px 2px 5px black");
$("body").on("mouseenter", ".box", function () {
  for (const box of $(".box")) {
    $(box).css("background-color", box === $(this)[0] ? "#8e44ad" : "red");
  }
});

// Ex.4 ================
const addToCart = (name) => {
  $("#cart").append($(`<div>${name}</div>`));
  $("#cart").on("click", "div", function () {
    $(this).remove();
  });
};
$("body").on("click", ".item", function () {
  if ($(this).data().instock) {
    // if (
    //   $("#cart")
    //     .children()
    //     .find((child) => child.innerText === "Melon")
    // )
    //   alert("354354");
    addToCart($(this).text());
  }
});

// Ex.5 ================
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
console.clear();
// Extensions - Color Picker

for (const child of $("#colors").children()) {
  $(child).css("padding", "10px");
  $(child).css("margin", "10px");
  $(child).css("box-shadow", "2px 2px 3px black");
  $(child).css("background-color", $(child).data().color);

  $(child).on("click", function () {
    $(".box").css("background-color", $(this).data().color);
  });

  console.log(child);
  $(".box").appendTo($("body"));
  $("#colors").appendTo($("body"));
}
