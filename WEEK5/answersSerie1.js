/* 01.ALGOS-serie1 */

// 00.exo /////////////////////////////////////////

/* const tens = (num1, num2) => {
  if (num1 === 10 || num2 === 10 || num1 + num2 === 10) {
    return true;
  }
  return false;
};

console.log(tens(1, 9)); */

// 01.exo /////////////////////////////////////////

/* const calcAge = (age) => {
  return age * 365;
};

console.log(calcAge(20)); */

// 02.exo /////////////////////////////////////////

/* const addUp = (num) => {
  let sum = 0;

  for (let i = num; i >= 1; i--) {
    sum += i;
  }

  return sum;
};

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));
 */

// 03.exo /////////////////////////////////////////

/*const minMax = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });

  const finalArr = [];

  if (arr.length >= 1) {
    finalArr.push(arr[0]);
    finalArr.push(arr[arr.length - 1]);
  } else {
    finalArr.push[arr[0]];
  }

  return finalArr;
};

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2345469, 5]));
console.log(minMax([1]));
 */

// 04.exo /////////////////////////////////////////

/* const detectWord = (str) => {
  const arr = str.split("");

  const finalWord = arr.filter((el) => el === el.toLowerCase()).join("");

  return finalWord;
};

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
 */

// 05.exo /////////////////////////////////////////

/* drinks = [
  { name: "lemonade", price: 10 },
  { name: "lime", price: 10 },
  { name: "coke", price: 8 },
  { name: "vodka", price: 17 },
  { name: "water", price: 3 },
];

const sortDrinksByPrice = (arr) => {
  const finalArr = arr.sort((a, b) => {
    return a.price - b.price;
  });

  return finalArr;
};

console.log(sortDrinksByPrice(drinks)); */

// 06.exo /////////////////////////////////////////

/* const animals = (chickens, cows, pigs) => {
  return chickens * 2 + cows * 4 + pigs * 4;
};

console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8)); */

// 07.exo /////////////////////////////////////////

/* const profitableGame = (prob, prize, pay) => {
  return prob * prize - pay > 0 ? true : false;
};

console.log(profitableGame(0.2, 50, 9));
console.log(profitableGame(0.9, 1, 2));
console.log(profitableGame(0.9, 3, 2)); */

// 08.exo /////////////////////////////////////////

/* const frames = (min, fps) => {
  return min * 60 * fps;
};

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25)); */

// 09.exo /////////////////////////////////////////

/* const calculateFuel = (dist) => {
  if (dist <= 0) {
    return false;
  }

  let fuel = dist * 10;

  if (fuel < 100) {
    return 100;
  }

  return fuel;
};

console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3)); */
