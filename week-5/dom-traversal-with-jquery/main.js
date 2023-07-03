$(".generator").on("click", function () {
  let generatorResult = [
    ["Processor ID:", $(this).closest(".processor").attr("id")],
    ["Computer’s data-id:", $(this).closest(".computer").data("id")],
    ["BUS:", $(this).closest(".computer").find(".BUS").text()],
  ];
  console.table(generatorResult);
});
$(".validator").on("click", function () {
  let qrs = $(this).closest(".computer").find(".QR");
  console.log(qrs);

  let qrsString = "";
  for (qr of qrs) {
    qrsString += qr.innerText + ", ";
  }
  let validatorResult = [
    [
      "Generator’s text:",
      $(this).closest(".computer").find(".generator").text(),
    ],
    ["MB:", $(this).closest(".computer").find(".MB").text()],
    ["Both QR:", qrsString.substring(0, qrsString.length - 2)],
  ];
  console.table(validatorResult);
});
