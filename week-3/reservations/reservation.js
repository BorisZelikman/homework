const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function () {
  const inputValue = document.getElementById("clientName").value;
  const answerP = document.getElementById("answer");
  if (reservations[inputValue]) {
    if (reservations[inputValue].claimed)
      answerP.innerHTML = "Hmm, someone already claimed this reservation";
    else answerP.innerHTML = `Welcome, ${inputValue}`;
  } else answerP.innerHTML = "You have no reservation";
};
