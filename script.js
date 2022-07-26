const cardDiv = document.getElementById("cardCreate");
const inputsContainer = document.getElementById("inputs-container");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const colorInput = document.getElementById("color");
const countryInput = document.getElementById("country");
const maleInput = document.getElementById("male");
const femaleInput = document.getElementById("female");
function getRadioValue() {
  if (maleInput.checked) {
    return "male";
  } else if (femaleInput.checked) {
    return "female";
  } else {
    return " TBD";
  }
}
function createCardInnerHtml() {
  if (nameInput.value.length < 1) {
    alert("your name is short");
    return;
  }
  if (ageInput.value <= 5) {
    alert("you don't know how to write");
    return;
  }
  if (ageInput.value > 120) {
    alert("you cant be this old!");
    return;
  }
  cardDiv.innerHTML += `<div class="card" style= "text-align: center; background-color: ${
    colorInput.value
  };">
  <div class="card-body">
      <h5 class="card-title"> Name :${nameInput.value}</h5>
  </div>
  <ul>
      <li class="list-group-item">
    Age :${ageInput.value} </li>
<li class="list-group-item"> country: ${countryInput.value}
</li>
<li class="list-group-item"> gender:
    ${getRadioValue()}
</li>
  </ul>
</div>`;
}
function resetValues() {
  nameInput.value = "";
  ageInput.value = "";
  colorInput.value = "#000";
  countryInput.value = "";
  maleInput.checked = false;
  femaleInput.checked = false;
}

function showBsCardWithBg() {
  createCardInnerHtml();
  resetValues();
}
