const checkAll = function () {
  const name = document.getElementById("name");
  const salary = document.getElementById("salary");
  const birthday = document.getElementById("birthday");
  const phone = document.getElementById("phone");
  let nameMsg = "";
  if (name.value == "") nameMsg = "Name is missing";
  else if (name.value.length < 3)
    nameMsg = "Name must be longer than 2 characters";
  let salaryMsg = "";
  if (salary.value <= 10000 || salary.value >= 16000)
    salaryMsg = "Salary must be greater than 10,000 but less than 16,000";
  let bithdayMsg = "";
  if (birthday.value == "") bithdayMsg = "Birthday may not be null";
  let phoneMsg = "";
  if (phone.value.length !== 10) phoneMsg = "Phone must be 10 digits long";

  if (document.getElementById("message") == null) {
    const message = document.createElement("h5");
    message.innerHTML = `${nameMsg} <br> ${salaryMsg} <br> ${bithdayMsg} <br> ${phoneMsg}`;
    message.style.gridArea = "m";
    message.id = "message";

    const form = document.getElementById("form");
    const submit = document.getElementById("submit");
    form.insertBefore(message, submit);
  } else {
    document.getElementById(
      "message"
    ).innerHTML = `${nameMsg} <br> ${salaryMsg} <br> ${bithdayMsg} <br> ${phoneMsg}`;
  }
};
