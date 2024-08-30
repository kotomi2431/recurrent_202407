window.addEventListener("scroll", function () {
  const fade = document.querySelector(".fade");
  const scroll = window.scrollY;
  if (scroll > 300) {
    fade.style.opacity = "1";
    fade.style.zIndex = "10000";
  } else {
    fade.style.opacity = "0";
    fade.style.zIndex = "-1";
  }
});
window.addEventListener("scroll", function () {
  const fade2 = document.querySelector(".fade2");
  const scroll = window.scrollY;
  if (scroll > 300) {
    fade2.style.opacity = "1";
    fade2.style.zIndex = "10000";
  } else {
    fade2.style.opacity = "0";
    fade2.style.zIndex = "-1";
  }
});
window.addEventListener("scroll", function () {
  const fade3 = document.querySelector(".fade3");
  const scroll = window.scrollY;
  if (scroll > 300) {
    fade3.style.opacity = "1";
    fade3.style.zIndex = "10000";
  } else {
    fade3.style.opacity = "0";
    fade3.style.zIndex = "-1";
  }
});
