document.addEventListener("DOMContentLoaded", () => {
  const obj = document.getElementById("main");

  obj.addEventListener("click", () => {
    obj.classList.toggle("grow");
  });
});
