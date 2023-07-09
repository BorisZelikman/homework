const getPeople = () => {
  $.ajax({
    url: "https://randomuser.me/api/?results=10",
    dataType: "json",
    success: function (data) {
      console.log(data);
      const newHTML = template(data);
      $("body").append(newHTML);
    },
  });
};
const source = $("#people-template").html();
const template = Handlebars.compile(source);
getPeople();
