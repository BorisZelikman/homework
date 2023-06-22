// Exercise 1
const StringFormatter = function () {
  const capitalizeFirst = function (text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  };
  const toSkewerCase = function (text) {
    return text.replaceAll(" ", "-");
  };
  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};
const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box

// Exercise 2
const Bank = function () {
  let _money = 500;
  const depositCash = function (value) {
    _money += value;
  };
  const checkBalance = function () {
    console.log(_money);
  };
  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};
const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950

// Exercise 3
const SongsManager = function () {
  const _songs = {};
  const addSong = function (songName, songUrl) {
    let newValue = songUrl.replace("https://www.youtube.com/watch?v=", "");
    _songs[songName] = newValue;
  };
  const addSongA = (songName, songUrl) =>
    (_songs[songName] = songUrl.replace(
      "https://www.youtube.com/watch?v=",
      ""
    ));
  const getSong = function (songKey) {
    console.log("https://www.youtube.com/watch?v=" + _songs[songKey]);
  };
  const getList = function () {
    console.table(_songs);
  };
  return {
    addSong: addSong,
    getSong: getSong,
    getList: getList,
  };
};
const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getList();

/*const addToPrev = function () {
  let prev = 0;
  const sum = function (number) {
    let ret = number + prev;
    prev = number;
    return ret;
  };

  return sum;
};

const addAll = function () {
  let prev = 0;
  const sum = function (number) {
    return (prev += number);
  };
  return sum;
};
const add = addAll();
//const add = addToPrev();

console.log(add(3)); // Output: 3
console.log(add(1)); // Output: 4
console.log(add(2)); // Output: 6
console.log(add(2)); // Output: 8
console.log(add(8)); // Output: 16


const setCounter = function (num) {
  let counter = 0;

  const count = function () {
    counter += num;
    console.log(counter);
  };

  return count;
};

const increment = setCounter(2);
increment(5);
increment();

const family = function () {
  const members = [];
  const birth = function (name) {
    members.push(name);
    console.log(members);
  };
  return birth;
};

const giveBitrh = family();
giveBitrh("boris");
giveBitrh("julia");

const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };
  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};
const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.addUser("Boris");
usersModule.addUser("Sofia");
usersModule.listUsers();
console.log(usersModule._users);
*/
