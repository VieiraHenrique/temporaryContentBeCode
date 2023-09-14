// 10.Exercises

const food = prompt(`What's your favorite food ?`);

if (food.toLowerCase() === "bananas") {
  alert(`I like bananas as well`);
} else if (food.toLowerCase() === "strawberries") {
  alert(`I love strawberries as well`);
} else if (food.toLowerCase() === "grapes") {
  const color = prompt("Green or Purple ?");
  if (color.toLowerCase() === "green") {
    alert("Green grapes are ok");
  } else if (color.toLowerCase() === "purple") {
    alert(`I don't like purple grapes`);
  } else {
    alert("I don't understand what you said");
  }
} else {
  alert(`Sorry.. I don't understand what ${food} means`);
}
