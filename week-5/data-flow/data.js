const posts = [
  { name: "Boris", text: "Test text" },
  { name: "Dmitry", text: "Second text" },
  { name: "Julia", text: "Another text" },
];
const newDiv = (post) => `<div class="post">${post.name}: "${post.text}"</div>`;
const render = () => {
  $("#container").remove();
  $("body").append('<div id="container"></div>');
  for (const post of posts) {
    console.log(newDiv(post));
    $("#container").append(newDiv(post));
  }
};

$("button").on("click", function () {
  const newName = $("#name").val();
  const newText = $("#text").val();
  const newPost = { name: newName, text: newText };

  posts.push(newPost);
  render();
});

$("body").on("click", ".post", function () {
  posts.splice($(this).index(), 1);
  render();
});

render();
