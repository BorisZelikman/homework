const angleX = (context, angle, radius) => {
  return context.width / 2 + Math.cos(angle) * radius;
};
function drawWatch() {
  var canvas = document.getElementById("clock");
  var context = canvas.getContext("2d");

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  context.beginPath();
  context.arc(centerX, centerY, 5, 0, Math.PI * 2);
  context.fillStyle = "#000";
  context.fill();
  context.closePath();

  // Draw the hour marks
  for (var i = 0; i < 12; i++) {
    var angle = ((i - 3) * (Math.PI * 2)) / 12;
    var x = angleX(canvas, angle, 50);
    //canvas.width / 2 + Math.cos(angle) * 50;
    var y = canvas.height / 2 + Math.sin(angle) * 50;

    context.beginPath();
    context.arc(x, y, 2, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
  }

  // Get the current time
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Draw the hour hand
  var hourAngle =
    (((hours % 12) + minutes / 60 + seconds / 3600) * (Math.PI * 2)) / 12;
  drawHand(context, hourAngle, 40, 6);

  // Draw the minute hand
  var minuteAngle = ((minutes + seconds / 60) * (Math.PI * 2)) / 60;
  drawHand(context, minuteAngle, 60, 4);

  // Draw the second hand
  var secondAngle =
    ((seconds + date.getMilliseconds() / 1000) * (Math.PI * 2)) / 60;
  drawHand(context, secondAngle, 70, 2);

  // Redraw the watch every second
  setTimeout(drawWatch, 1000);
}

function drawHand(context, angle, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(context.canvas.width / 2, context.canvas.height / 2);
  context.lineTo(
    context.canvas.width / 2 + Math.cos(angle) * length,
    context.canvas.height / 2 + Math.sin(angle) * length
  );
  context.stroke();
  context.closePath();
}

drawWatch();
