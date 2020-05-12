# 2.6.2 - JS - Object Methods

---

## Situation

###

Don't have to count on object to sort.

###

You have an object that you need to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

// Output a list of my friends' names: ['Rahul', 'Marianne', etc]
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

// Get the AVERAGE age amongst my friends

####
Get item as an array.  [32, 60, 14, 35]

totalAge / allAge.lenght = la moyenne de tout selon le nb d'age dans le array.

friendsAge.hasOwnProprety (to see if it has a proprety)
####
```

---

## [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

```js
const friendsAge = { Rahul: 32, Marianne: 60, Chaim: 14, Abdul: 35 };

// Create a sentence: "Rahul is 32, Marianne is 60..."
let friendEntries = Object.entries(friendsAge);

let sentence = " ";

friendEntries.forEach(function (entry) {
  //console.log(entry); ["rahul", 32]
  let key = entry[0];
  let value = entry[1];

  sentence += `${key} is ${value},`;
});
```
