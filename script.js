document.querySelector("#nomor").oninput = () => {
  document.querySelector(".card-nomor p").innerText =
    document.querySelector("#nomor").value;
};

document.querySelector("#name").oninput = () => {
  document.querySelector(".card-foot span").innerText =
    document.querySelector("#name").value;
};

document.querySelector("#expired").oninput = () => {
  document.querySelector(".expired").innerText =
    document.querySelector("#expired").value;
};
