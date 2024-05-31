const body = document.querySelector("body");
const label = document.querySelector("label");
const pageName = document.querySelector(".page-head");
const content = document.querySelectorAll(".content");
const downGrid = document.querySelector(".down-grid");
const switchUp = document.querySelectorAll(".switch");

document.querySelectorAll(".switch").forEach(function (switchUp) {
  label.addEventListener("click", () => {
    switchUp.classList.toggle("active");
  });
});

document.querySelectorAll(".content").forEach(function (content) {
  label.addEventListener("click", () => {
    content.classList.toggle("active");
  });
});

document.querySelectorAll(".down-grid").forEach(function (downGrid) {
  label.addEventListener("click", () => {
    downGrid.classList.toggle("active");
  });
});

label.addEventListener("click", () => {
  pageName.classList.toggle("active");
});

label.addEventListener("click", () => {
  body.classList.toggle("dark");
});

label.addEventListener("click", () => {
  label.classList.toggle("active");
});
