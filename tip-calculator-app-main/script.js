"use strict";
const billInput = document.getElementById("input-bill");
const resetBtn = document.querySelector(".btn-reset");
const errMessageBill = document.querySelector(".err-bill");
const errMessagePeople = document.querySelector(".err-people");
const buttons = document.querySelectorAll(".btn-percent");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
  })
);

const regex = /^\d+(\.\d+)?$/;
function testBillInput(variable) {
  return regex.test(variable);
}

resetBtn.addEventListener("click", function (e) {
  const billValue = billInput.value;
  let billIsTrue;
  testBillInput(billValue) ? (billIsTrue = true) : (billIsTrue = false);
  if (!billIsTrue) {
    errMessageBill.classList.remove("closed");
  } else if (billIsTrue) {
    errMessageBill.classList.add("closed");
  }
});
