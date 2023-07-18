let detButton = document.querySelector(".det-button");
let fotoOne = document.querySelector(".foto1");
let fotoTwo = document.querySelector(".foto2");
detButton.addEventListener("mouseover", function () {
  fotoOne.classList.add("delate");
  fotoTwo.classList.toggle("delate");
});
detButton.addEventListener("mouseout", function () {
  fotoOne.classList.toggle("delate");
  fotoTwo.classList.add("delate");
});
