// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

people.splice(people.length, 0, {
  name: { first: "Nadia", middle: "", last: "Amini" },
  age: 25,
}); // add to last index

//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  // Yuor code here
  peopleArr.length;
  let totalAge = 0;

  peopleArr.forEach((element) => {
    totalAge = totalAge + element.age;
  });

  return totalAge / peopleArr.length;
}

console.log(`Average age is ${avgAge(people)}.`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  // Your code here
  let result = [];

  peopleArr.forEach((element) => {
    if (element.name.middle === undefined) {
      element.name.middle = "";
    }

    let fullName =
      element.name.first + " " + element.name.middle + " " + element.name.last;
    result.push(fullName);
  });

  return result;
}

console.log(fullName(people));

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  // Your code here
  let result = [];
  peopleArr.forEach((element) => {
    if (element.age > age) {
      result.push(element);
    }
  });
  return result;
}
//if people older than 26
//return an array of people older than 26

console.log(olderPeople(people, 26));
