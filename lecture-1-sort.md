# 2.6.1 - JS - array.sort()

---

## .sort() - without parameters

```js
const characters = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

characters.sort();

###
outcome?
["Beth", "Jerry", "Morty", "Rick", "Summer"]
###

```

---

This method will sort the array items by their `unicode` numbers.

```
let letter = 'A';
console.log(letter.charCodeAt(0))
```

###

Upper case comes befor lower case.

###

---

This will work for _most_ cases, but what about when it doesn't?

---

### Example

This doesn't work as _expected_.

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort();

###
outcome?
[ 0, 12, 123, 13, 6, 76, 9 ]
###
```

---

## Solution: Define out own sorting function!

We can define our own sorting

---

## .sort() - with a function parameters

- This method can accept a function as a parameter.
- This function acts as a sorting function.

---

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort(function(a, b) => {
if (a > b)
return 1;
} else {
  return -1
}
});

###
names = ['Zachary', 'betty']

names.sort(function(a,b) {
  let lowercaseA = a.toLowerCase();
  let lowercaseB = b.toLowerCase();

  if (lowercaseA > lowercaseB) {
    return 1;
    } else {
      return -1;
    }
})
###

outcome?
['betty', 'Zachary']
```
