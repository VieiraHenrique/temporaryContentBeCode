new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  on: {
    slideChange: function (swiper) {
      console.log(swiper);
    },
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <div class="${className}">
        <img src="./img/${index + 1}.jpg" alt="" />
      </div>`;
    },
  },
});
