"use strict";
const billInput = document.getElementById("input-bill");
const peopleInput = document.getElementById("input-people");
const buttons = document.querySelectorAll(".btn-percent");
const btnCustom = document.getElementById("btn-custom");
const errMessageBill = document.querySelector(".err-bill");
const errMessagePeople = document.querySelector(".err-people");
const resetBtn = document.querySelector(".btn-reset");

buttons.forEach((button) =>
  button.addEventListener("click", function (e) {
    btnCustom.value = "";
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      button.classList.add("active");
    });
  })
);
btnCustom.addEventListener("click", function (e) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
});

const regexBill = /^\d+(\.\d+)?$/;
function testBillInput(variable) {
  return regexBill.test(variable);
}
const regexPeople = /^\d+$/;
function testPeopleInput(variable) {
  return regexPeople.test(variable);
}

resetBtn.addEventListener("click", function (e) {
  const billValue = billInput.value;
  const peopleValue = peopleInput.value;
  let billIsTrue;
  let peopleIsTrue;
  testBillInput(billValue) ? (billIsTrue = true) : (billIsTrue = false);
  testPeopleInput(peopleValue) ? (peopleIsTrue = true) : (peopleIsTrue = false);
  if (!billIsTrue) {
    errMessageBill.classList.remove("closed");
  } else if (billIsTrue) {
    errMessageBill.classList.add("closed");
  }
  if (!peopleIsTrue) {
    errMessagePeople.classList.remove("closed");
  } else if (peopleIsTrue) {
    errMessagePeople.classList.add("closed");
  }
});
