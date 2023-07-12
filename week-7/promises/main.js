const getRandomWord = function () {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(words[Math.floor(Math.random() * words.length)]);
    }, 1000);
  });
};

const getSynonyms = function (word) {
  let thesauraus = {
    Absolute: ["Definitive", "Certain", "Sure", "Unequivocal"],
    Astute: ["Sharp", "Poignant", "Clever"],
    Azure: ["Blue", "Cyan", "Sky-blue"],
    Bright: ["Luminous", "Brilliant"],
    Bonanza: ["Plethora", "Smorgasboard", "Copious", "Plenty"],
    Elusive: ["Slick", "Slippery", "Ethereal", "Loose"],
    Erode: ["Destroy", "Wear out", "Tarnish"],
    Hindrance: ["Bother", "Disturbance", "Problematic"],
    Phonic: ["Soundful"],
    Ploy: ["Plan", "Ruse"],
    Polaroid: ["Photograph"],
    Yap: ["Bark", "Blab", "Chatter"],
    Yonder: ["There", "Away", "Far", "Afar"],
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(thesauraus[word]);
    }, 1000);
  });
};

const getSentiment = function (word) {
  let wordSentiment = {
    Definitive: 1,
    Sharp: 1,
    Blue: 0,
    Luminous: 1,
    Plethora: 1,
    Slick: -1,
    Destroy: -1,
    Bother: -1,
    Soundful: 0,
    Plan: 0,
    Photograph: 0,
    Bark: -1,
    There: -1,
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(wordSentiment[word]);
    }, 1000);
  });
};

// No need for promises here
const getSentimentDescription = function (sentiment) {
  return sentiment === 1
    ? "Positive"
    : sentiment === -1
    ? "Negative"
    : "Neutral";
};

// getRandomWord(function (word) {
//   getSynonyms(word, function (synonyms) {
//     getSentiment(synonyms[0], function (sentiment) {
//       console.log(
//         `The word ${word} has a synonym ${
//           synonyms[0]
//         }                which has a ${getSentimentDescription(
//           sentiment
//         )} sentiment`
//       );
//     });
//   });
// });

/*getRandomWord().then((word) => {
  getSynonyms(word).then((synonyms) => {
    getSentiment(synonyms[0]).then((sentiment) => {
      console.log(
        `The word ${word} has a synonym ${
          synonyms[0]
        } which has a ${getSentimentDescription(sentiment)} sentiment`
      );
    });
  });
});
*/
let word = null;
/*
getRandomWord()
  .then((wordParam) => {
    word = wordParam;
    let synonymsPromise = getSynonyms(word);
    let sentimentPromise = getSentiment(word);
    return Promise.all([synonymsPromise, sentimentPromise]);
  })
  .then((promiseResults) => {
    // The first item in the array is our synonyms array, and the second is the sentiment for the word we got.
    let [synonyms, sentiment] = promiseResults;
    const sentimentDescription = getSentimentDescription(sentiment);
    console.log(
      `The word ${word} has a ${sentimentDescription} sentiment and synonyms ${synonyms}`
    );
  });
*/

const Ex1 = (rndWord) => {
  $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${rndWord}`)

    .then((response) => {
      if (response.totalItems === 0) {
        console.log("NOT FOUND");
        return;
      }
      let authors = "";
      const authersArr = response.items[0].volumeInfo.authors;
      authersArr.forEach(
        (name) =>
          (authors = authors + authersArr.length > 1 ? ", " : " " + name)
      );

      console.log(response.items[0].volumeInfo.title + "." + authors);
    })
    .catch((error) => console.log("aaa!!!!!!!!!!!!!!!!! " + error));
};

const getBook = (word) => {
  return new Promise((resolve, reject) => {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
      .then((responce) => resolve(responce))
      .catch((error) => reject("!!!!!!ERROR!!!!!! " + error));
  });
};

const getGif = (word) => {
  const apiKey = "lCfAKpgxCTeeIfHELqrnDkDzsjGwjmns";
  let gifSearch = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${apiKey}&limit=1`;
  return new Promise((resolve, reject) => {
    $.get(gifSearch).then((responce) => {
      resolve(responce);
      console.log(responce.data[0]);
    });
  });
};

const showBook = (response) => {
  let result = "NOT FOUND";
  if (response.totalItems === 0) {
    console.log("NOT FOUND");
  } else {
    let authors = "";
    const authersArr = response.items[0].volumeInfo.authors || ["-"];
    authersArr.forEach(
      (name) => (authors = authors + authersArr.length > 1 ? ", " : " " + name)
    );

    result = response.items[0].volumeInfo.title + "." + authors;
  }
  console.log(result);
  $("body")
    .append($("<br>"))
    .append(($("<p>").innerHTML = result));
};

const showGif = (responce) => {
  const gif = responce.data[0].images;
  const $img = $("<img>");
  $img.attr({ src: gif.fixed_height_still.url });
  $("body").append($img);
};

$.get("https://random-word-api.herokuapp.com/word")
  .then((response) => {
    const rndWord = response[0];
    console.log(rndWord);
    let bookPromise = getBook(rndWord);
    let gifPromise = getGif(rndWord);
    return Promise.all([bookPromise, gifPromise]);
  })
  .then((promiseResults) => {
    let [bookResponse, gifResponse] = promiseResults;
    showGif(gifResponse);
    showBook(bookResponse);
  })
  .catch((error) => {
    console.log("One or more promises rejected:", error);
  });
