document.addEventListener("DOMContentLoaded", () => {
  const obj_1 = document.getElementById("Close")
  const obj = document.getElementById("Open");
  const target = document.getElementById("main_1")
  obj.addEventListener("click", () => {
    target.classList.toggle("open");
  });
  obj_1.addEventListener("click", () => {
    target.classList.toggle("open");
  });
  target.addEventListener("animationend", () => {
    if(target.classList.contains("open")){
        obj.style.opacity = "0";
    };
  });
});
