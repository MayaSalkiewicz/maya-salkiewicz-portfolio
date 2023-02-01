const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY >= 75) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
});

const menuBtn = document.querySelector(".hamburger");
const menuList = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
  menuList.classList.toggle("is-active");
});

menuList.addEventListener("click", function () {
  menuList.classList.remove("is-active");
});
