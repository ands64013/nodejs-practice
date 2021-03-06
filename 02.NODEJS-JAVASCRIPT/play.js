const { close } = require("fs");
const { resolve } = require("path");
const { isArgumentsObject } = require("util/types");

const name = "Max";
let age = 29;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is" +
    userAge +
    ", and the user has Hobbies: " +
    userHasHobby
  );
};

const person = {
  name: "Max",
  age: 29,
  greet1: () => {
    console.log("Hi, I am " + this.name); // global
  },
  greet2: function () {
    return console.log("Hi, I am " + this.name);
  },
  greet3() {
    return console.log("Hi, I am " + this.name);
  },
};

person.greet1();
person.greet2();
person.greet3();

const add = (a, b) => a + b;
const addOne = (a) => a + 1;
console.log(addOne(1));
console.log(add(1, 2));
console.log(summarizeUser(name, age, hasHobbies));

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);

console.log(hobbies);

hobbies.push("Programming");
console.log(hobbies);

const copiedPerson = { ...person };
console.log(copiedPerson);

const copiedArray = [...hobbies]; // or hobbies.slice()
console.log(copiedArray);

const copiedArray2 = hobbies.slice(); // or hobbies.slice()
console.log(copiedArray2);

const toArrayy = (...args) => {
  return args;
};

console.log(toArrayy(1, 2, 3, 4));

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name2, age2 } = person;
console.log(name2, age2);

//
// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("Done!");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Time is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
});
