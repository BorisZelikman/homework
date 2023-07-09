const menuData = {
  menu: [
    { name: "Google", link: "http://google.com" },
    { name: "Facebook", link: "http://facebook.com" },
    { name: "Instagram", link: "http://nstagram.com" },
    { name: "Twitter", link: "http://twitter.com" },
  ],
};

const source = $("#menu-template").html();
const template = Handlebars.compile(source);
const newHTML = template(menuData);

// append our new html to the page
$(".menu").append(newHTML);

var classData = {
  classmates: [
    { name: "That on gal", description: "Always has the ansswer" },
    { name: "The weird dude", description: "Quick with a smile" },
    { name: "Taylor", description: "Just Taylor" },
  ],
};

const source2 = $("#class-template").html();
const template2 = Handlebars.compile(source2);
const classmatesHtml = template2(classData);
$(".classroom").append(classmatesHtml);

const renderFirst = function () {
  const source = $("#first-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ text: "This gets rendered" });
  $("body").append(newHTML);
};

const renderSecond = function () {
  const source = $("#second-template").html();
  const template = Handlebars.compile(source);
  let newHTML = template({ moreText: "This also gets rendered" });
  $("#special").append(newHTML);
};

renderFirst();
renderSecond();
