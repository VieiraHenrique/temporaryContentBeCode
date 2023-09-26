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

/* const ransomNote = (noteText, magazineText) => {
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
); */

// 02.exo /////////////////////////////////////////

/* const isPalindrome = (str) => {
  arr = str.trim().toLowerCase().replace(" ", "").split("");
  const arr2 = [...arr].reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("Madam, I'm Adam")); */

// 03.exo /////////////////////////////////////////

document.querySelector;
