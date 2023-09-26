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

/* 03.ALGOS-serie3 */

// 00.exo /////////////////////////////////////////

/* const oddishOrEvenish = (num) => {
  const arr = `${num}`.split("");

  let sum = 0;

  arr.forEach((el) => {
    sum += parseInt(el);
  });

  if (!(sum % 2)) return "Eveninsh";

  return "Odish";
};

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433)); */

// 01.exo /////////////////////////////////////////

/* const getTotalPrice = (arr) => {
  let sum = 0;

  arr.forEach((el) => {
    sum += el.price * el.quantity;
  });

  return Number(sum.toFixed(2));
};

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);

console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }]));

console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);

console.log(
  getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.1 },
    { product: "Lollipop", quantity: 1, price: 0.2 },
  ])
); */

// 02.exo /////////////////////////////////////////

/* const reverseOdd = (str) => {
  const arr = str.split(" ").map((el) => {
    if (el.length % 2) {
      return el.split("").reverse().join("");
    }
    return el;
  });

  return arr.join(" ");
};

console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")); */

// 03.exo /////////////////////////////////////////

/* const isSmooth = (str) => {
  const arr = str.split(" ");

  const result = arr.every((word, i) => {
    if (!(i === 0 || i === arr.length - 1)) {
      const lastWord = arr[i - 1].toLowerCase();
      const nextWord = arr[i + 1].toLowerCase();
      word = word.toLowerCase();
      return (
        lastWord[lastWord.length - 1] === word[0] &&
        nextWord[0] === word[word.length - 1]
      );
    }
    return true;
  });

  return result;
};

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats super righteously")); */

// 04.exo /////////////////////////////////////////

/* const sevenBoom = (arr) => {
  arrSolo = arr.join("").split("");

  hasSeven = arrSolo.some((el) => el == 7);

  return hasSeven ? "Boom" : "No 7 in array";
};

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86])); */

// 05.exo /////////////////////////////////////////

// C = 5/9(F-32)
// F =(C*9/5)+32

/* const convert = (temperature) => {
  const unit = temperature.slice(-2);

  switch (unit) {
    case "°C":
      return Math.round((temperature.slice(0, -2) * 9) / 5 + 32);
    case "°F":
      return Math.round((5 / 9) * (temperature.slice(0, -2) - 32));

    default:
      return "Error";
  }
};

console.log(convert("35°C"));
console.log(convert("19°F"));
console.log(convert("33")); */

// 06.exo /////////////////////////////////////////

/* const findBrokenKeys = (str1, str2) => {
  const brokenLetters = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i] && !brokenLetters.includes(str1[i])) {
      brokenLetters.push(str1[i]);
    }
  }

  return brokenLetters;
};

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5")); */

/* 04.ALGOS-advanced */

// 00.exo /////////////////////////////////////////

/* const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(20); */

// 01.exo /////////////////////////////////////////

const ransomNote = (noteText, magazineText) => {
  magazineText = magazineText.split(" ");
  noteText = noteText.split(" ");

  const hash = magazineText.reduce((obj, word) => {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word]++;
    }
    return obj;
  }, {});

  for (let i = 0; i < noteText.length; i++) {
    if (!Object.keys(hash).includes(noteText[i])) {
      return false;
    } else if (!hash[noteText[i]]) {
      return false;
    } else {
      hash[noteText[i]]--;
    }
  }

  return true;
};

console.log(
  ransomNote(
    "this is a note to you from a secret admirer",
    "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
  )
);
