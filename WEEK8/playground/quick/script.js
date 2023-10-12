const generateBG = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const rainbow = async () => {
  await generateBG("blue", 1000);
  await generateBG("red", 1000);
  await generateBG("yellow", 1000);
  await generateBG("purple", 1000);
};

rainbow();
