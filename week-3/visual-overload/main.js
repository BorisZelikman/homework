const containerDiv = document.getElementById("container");
for (let i = 1; i < 10; i++) {
  let box = document.createElement("div");
  box.textContent = i;
  box.style.border = "1px solid black";
  box.style.padding = "50px";
  box.style.transition = "background-color 0.3s";
  box.addEventListener("mouseenter", changeColor);

  containerDiv.appendChild(box);
}

function changeColor() {
  const randomColor = getRandomColor();
  this.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}
