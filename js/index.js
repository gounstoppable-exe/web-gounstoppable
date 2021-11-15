let crossBtn = document.querySelector(".cross");
let navbar = document.querySelector(".navigation");
crossBtn.addEventListener("click", function navhide() {
  navbar.setAttribute("style", "right: -18rem");
});
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function navshow() {
  navbar.setAttribute("style", "right: 0");
});

let cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
