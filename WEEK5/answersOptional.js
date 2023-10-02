/* 1. */

const removeDuplicates = (arr) =>
  arr.filter((item, index) => index === arr.indexOf(item));

console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));

console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));

console.log(removeDuplicates([true, true, false, true, true, false]));

/* 2. */

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/* 3. */

const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

/* 4. */

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

/* 5. */

const getSmallest = (arr) =>
  arr.reduce((smallest, num) => Math.min(smallest, num));

/* 6. */

const areEqual = (arr1, arr2) =>
  arr1.sort().join(",") === arr2.sort().join(",");

/* 7. */

const randomRGB = () =>
  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

console.log(randomRGB());

/* 8. */

const occurencies = (str, letter) => str.split(letter).length - 1;

/* 9. */

onlyPositives = (arr) => arr.reduce((sum, el) => (el > 0 ? sum + el : sum), 0);

console.log(onlyPositives([1, 6, 2, -3, 5, -12]));

console.log(onlyPositives([-3, -4, -2]));
