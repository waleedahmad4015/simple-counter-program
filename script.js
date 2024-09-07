const counter = document.getElementById("count");
const decBtn = document.getElementById("decrease");
const incBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
  counter.innerHTML = 0;
});

decBtn.addEventListener("click", () => {
  if (counter.innerHTML != 0) {
    counter.innerHTML = Number(counter.innerHTML) - 1;
  }
});

incBtn.addEventListener("click", () => {
  counter.innerHTML = Number(counter.innerHTML) + 1;
});
