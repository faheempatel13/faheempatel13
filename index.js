/////nav js////

const list = document.querySelectorAll(".list");
function activelink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activelink));

let indicator = document.querySelector(".indicator");
let rect = indicator.getBoundingClientRect();
x = rect.x;
const first = document.querySelector(".first");
if ((x = 215)) {
  first.classList.add("active");
}
////////////