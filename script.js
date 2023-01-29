const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY >= 75) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
});
