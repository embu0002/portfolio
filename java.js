/* Henvender til det html element, som har den specifikke class */
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick); /* Tilføjer eventlistener, så man kan klikke */
function burgerClick() {
  /* skifter klassen til active (bruges til at vise/skjule menu) */
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick); /* Tilføjer eventlistener, så man kan klikke */
function menuClick() {
  /* fjerne active */
  burger.classList.remove("active");
  nav.classList.remove("active");
}
