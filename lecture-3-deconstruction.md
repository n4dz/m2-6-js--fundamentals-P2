# 2.6.3 — Deconstructing

---

Let's say we have the following program:

```js
function doSomething(data) {
  let name = data[0];
  let city = data[1];
  let age = data[2];

  return `My name is ${name} and I live in ${city}`; //ok if dont use age
}

let me = ["Josh", "Montreal", 33];

doSomething(me);
```

We're essentially "deconstructing" the array.

---

There is a syntax to do this in 1 step:

```js
function doSomething(data) {
  let [name, city, age] = data;

  return `My name is ${name}, from ${city}`;
}

let me = ["Josh", "Montreal", 33];

doSomething(me);
```

---

By wrapping the assignment variables in square brackets, you "unpack" them:

```js
let [one, two, three] = [1, 2, 3];
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
```

---

This even works with function parameters!

```js
function doSomething([name, city, age]) {
  console.log(name); // 'Josh'
}

let me = ['Josh', 'Montreal', 33];
doSomething(me);

#####
friends.Entry.forEach(function(entry) {
let [friendName, frienAge] = entry;

console.log(`My frien ${friendName} just turned ${friendAge} this year!`)
});

OR

friends.Entry.forEach(function([friendName, frienAge]) {

console.log(`My frien ${friendName} just turned ${friendAge} this year!`)
});

OR

1. simpler context :

function logData(data) {
let first = data[0];
let second = date [1];

console.log(first, second);
}
logData([7, 12]) //data is arry with two things


OR

2. simpler context :

function logData([first, second]) {
  console.log(first,second);
}
logData([7, 12])
#####
```

---

Finally: something similar works with objects.

---

```js
let myObj = {
  name: "Josh",
  city: "Montreal",
  age: 33,
};

const { name, age } = myObj; //deconstruction look same as for an array. But have to specify the specific key.

#####
const name = myObj.name;
const age = myObj.age;
#####

console.log(name); // 'Josh'
console.log(age); // 33
```

---

# Exercises

Convert the following to take advantage of deconstruction

---

```js
let winningNumbers = [4, 17, 38, 9];

let firstPlace = winningNumbers[0];
let secondPlace = winningNumbers[1];
let thirdPlace = winningNumbers[2];

console.log(
  `The top three winners are: ${firstPlace}, ${secondPlace}, ${thirdPlace}.`
);

#####
let winningNumbers = [4, 17, 38, 9];

let [firstPlace, secondPlace, thirdPlace] = winningNumbers;

console.log(
  `The top three winners are: ${firstPlace}, ${secondPlace}, ${thirdPlace}.`
);
#####
```

---

```js
let weatherData = {
  city: "Toronto",
  weather: "sunny",
  temperature: 23,
};

function printWeather(data) {
  console.log(
    `It is ${data.weather} in ${data.city}, with a high of ${temperature}.`
  );
}

printWeather(weatherData);


#####
let {weather, city, temperature} = data; //dosent need to be in order like for an array.

OR

function printWeather ({ city, weather, temperature }) {
console.log(
    `It is ${weather} in ${city}, with a high of ${temperature}.`
  );

}



#####
```

---

```js
function handleChange(event) {
  let value = event.target.value;
  console.log(value);
}

let input = document.querySelector("input");
input.addEventListener("change", handleChange);

#####
let input = document.querySelector('input');
input.addEventListener('change', function(event) {handleChange(event)});
#####
```

small trick, you can rename the variable you destructure
let {name: firstName, middle: middleName} = person.name
