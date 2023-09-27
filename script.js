const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const parag = btn.nextElementSibling;
    parag.classList.toggle("hidden");
    if (parag.classList.contains("hidden")) {
      btn.innerText = "Open text";
    } else {
      btn.innerText = "Close text";
    }
  });
});
