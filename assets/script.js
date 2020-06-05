"use strict";

let firstNameDom = document.getElementById("firstname");
let secondNameDom = document.getElementById("secondname");
let submitDom = document.getElementById("submit");
let resultDom = document.getElementById("result");

function getValue(domElt) {
  return domElt.value;
}

submitDom.addEventListener("click", () => {
  sliceNames(getValue(firstNameDom), getValue(secondNameDom));
});

function sliceNames(name1, name2) {
  if (name1 !== "" && name2 !== "") {
    let slicedFirstName = name1.slice(0, name1.length / 2);
    let slicedSecondName = name2.slice(name2.length / 2);
    displayResult(slicedFirstName + slicedSecondName);
  }
}

function displayResult(newText) {
  resultDom.textContent = `New name: ${newText}`;
}
