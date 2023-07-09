const peaple = [];
const get5 = () => {
  $.ajax({
    url: "https://randomuser.me/api/?results=10",
    dataType: "json",
    success: function (data) {
      console.log(data.results[1]);
      let newHTML = template(data);
      $("body").append(newHTML);
    },
  });
};

const source = $("#people-template").html();
const template = Handlebars.compile(source);
get5();
