/* 02.ALGOS-serie2 */

// 00.exo /////////////////////////////////////////

/* const countTrue = (arr) => {
  if (!arr.length) {
    return 0;
  }

  const result = arr.filter((el) => {
    return el;
  });

  return result.length;
};

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([])); */

// 01.exo /////////////////////////////////////////

// I am the a. I just have to know if b is maximum 6 position after me.

/* const possibleBonus = (a, b) => {
  if (a === b || b < a) {
    return false;
  }

  if (b - a <= 6) {
    return true;
  }

  return false;
};

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
console.log(possibleBonus(5, 5));
console.log(possibleBonus(17, 18)); */

// 02.exo /////////////////////////////////////////

/* const numOfDigits = (num) => {
  return `${num}`.length;
};

console.log(numOfDigits()); */

// 03.exo /////////////////////////////////////////

/* const toArray = (obj) => {
  return Object.entries(obj);
};

console.log(toArray({})); */

// 04.exo /////////////////////////////////////////

/* const arrayOfMultiples = (num, length) => {
  const finalArr = [];

  for (let i = 1; i <= length; i++) {
    finalArr.push(num * i);
  }

  return finalArr;
};

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));
 */

// 05.exo /////////////////////////////////////////

/* const removeLeadingTrailing = (str) => {
  return `${Number(str)}`;
};

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("03.1400"));
console.log(removeLeadingTrailing("30")); */

// 06.exo /////////////////////////////////////////

/* const sortIt = (arr) => {
  if (!arr.length) return null;

  arr.sort((a, b) => {
    return a - b;
  });

  return arr;
};

console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6])); */

// 07.exo /////////////////////////////////////////

/* const calculator = (a, symbol, b) => {
  switch (symbol) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b) {
        return a / b;
      } else {
        return "Can't divide by 0";
      }

    default:
      return "Something went wrong...";
  }
};

console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(2, "-", 3));
console.log(calculator(4, "/", 2));
console.log(calculator(7, "/", 0)); */

// 08.exo /////////////////////////////////////////

/* const areaOfCountry = (country, mass) => {
  const totalMass = 148940000;
  const percentage = (mass / totalMass) * 100;

  return `${country} is ${percentage.toFixed(
    2
  )}% of the total world's landmass`;
};

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195)); */

// 09.exo /////////////////////////////////////////

/* const reverseWords = (str) => {
  const arr = str
    .trim()
    .split(" ")
    .filter((el) => el);

  const finalArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    finalArr.push(arr[i]);
  }

  return finalArr.join(" ");
};

console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example")); */
