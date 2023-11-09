// Inpur No Kartu
const inpNomor = document.querySelector("#nomor");
inpNomor.addEventListener("input", function () {
  const cardNomor = document.querySelector(".card-nomor p");
  cardNomor.innerText = inpNomor.value;
});

// Input Nama pemilik
const inpName = document.querySelector("#name");
inpName.addEventListener("input", function () {
  const cardName = document.querySelector(".card-foot span");
  cardName.innerText = inpName.value;
});

// Input Exp Kartu
const inpExp = document.querySelector("#expired");
inpExp.addEventListener("click", function () {
  const cardExpired = document.querySelector(".expired");
  inpExp.innerText - inpExp.value;
});
