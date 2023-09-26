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
