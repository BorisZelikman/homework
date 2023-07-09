const getBookName = (isbn) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      console.log(data);
    },
  });
};

const fetch = (queryType, queryValue) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      console.log(data.items[0].searchInfo.textSnippet);
    },
  });
};
const fetchTable = (queryType, queryValue) => {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      for (const item of data.items) {
        console.table(
          item.volumeInfo.title,
          item.volumeInfo.authors,
          item.volumeInfo.isbn
        );
      }
    },
  });
};

const getNameByISBN = (isbns) => {
  for (const isbn of isbns) {
    $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
      success: function (data) {
        console.log(data.items[0].volumeInfo.title);
      },
    });
  }
};

const isbns = ["9782806269171", "1440633908", "9781945048470", "9780307417138"];
//getNameByISBN(isbns);

//getBookName(isbns[0]);
//fetchTable("title", "How to Win Friends and Influence People");

console.clear();

// var xhr = $.get(
//   "http://api.giphy.com/v1/gifs/search?q=cats&api_key=lCfAKpgxCTeeIfHELqrnDkDzsjGwjmns&limit=5"
// );
// xhr.done(function (data) {
//   console.log("success got data", data);

//   $("iframe").src = data[0].embed_url;
// });

const api_key = "lCfAKpgxCTeeIfHELqrnDkDzsjGwjmns";
const getGyph = (searchStr) => {
  const urlStr = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=lCfAKpgxCTeeIfHELqrnDkDzsjGwjmns&limit=5`;
  //const urlStr = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&${api_key}=lCfAKpgxCTeeIfHELqrnDkDzsjGwjmns&limit=5`;
  $.ajax({
    method: "GET",
    url: urlStr,
    success: function (content) {
      console.log(content.data);
      $("img").remove();
      let img = document.createElement("img");
      img.src = content.data[4].images.downsized.url;
      $("body").append(img);
    },
  });
};
const unsplash = (searchStr) => {
  const accessKey = "Ga3FYmuPDSohT0gKl9RypMop-CPcvMMYGXh8N5LVKxs";
  const count = 1; // Number of images to fetch

  const endpoint = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchStr}&per_page=${count}`;
  $.ajax({
    method: "GET",
    url: endpoint,
    success: function (content) {
      const imageContainer = document.getElementById("imageContainer");
      console.log(content);
      const image = document.createElement("img");
      image.src = content.results[0].urls.regular;

      imageContainer.appendChild(image);
    },
  });
};

const search = () => {
  unsplash($("input").val());
  getGyph($("input").val());
};
