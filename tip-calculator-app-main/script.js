"use strict";
const billInput = document.getElementById("input-bill");
const resetBtn = document.querySelector(".btn-reset");

resetBtn.addEventListener("click", function (e) {
  const billValue = Number(billInput.value);
  console.log(typeof billValue);
  // Padomāt, kā pārbaudīt, ka tikai cipari, un nevis citi simboli ir input laukā. Ja nav tikai cipari, izdot erroru.
});
