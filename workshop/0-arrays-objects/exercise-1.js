// Exercise 1
// -------------------
// Grubhub's "year in food" for 2018
// source: https://www.insider.com/most-popular-foods-grubhub-2018-12

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

mostPopularFood.splice(0, 0, "bean burritos"); // add to index 0
delete mostPopularFood[mostPopularFood.length - 1]; // delete last index of array
mostPopularFood.splice(
  mostPopularFood.length,
  0,
  "buffalo-flavored cauliflower"
); // add to last index

mostPopularFood.forEach((element) => console.log(element)); // output each element of array

// The array holds a top-ten list of foods as ranked by Grubhub.
// #1 and #10 are missing
//       #1 is 'bean burritos'
//      #10 is 'buffalo-flavored cauliflower' (not kidding)

// Write a program that will do the following:
// Add them to the array in the right position
// Output them in a tidy top-ten fashion in the console.

// NO for loops (use `forEach` instead)
