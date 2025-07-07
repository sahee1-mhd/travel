// form-validation.js

function validateForm() {
  var whereTo = document.getElementById("whereTo").value;
  var howMany = document.getElementById("howMany").value;
  var arrivalDate = document.getElementById("arrivalDate").value;
  var leavingDate = document.getElementById("leavingDate").value;

  if (whereTo.trim() === "") {
    alert("Please enter a destination in 'Where To' field.");
    return false;
  }

  if (isNaN(howMany) || howMany <= 0) {
    alert("Please enter a valid number of guests in 'How Many' field.");
    return false;
  }

  var today = new Date().toISOString().split('T')[0];
  if (arrivalDate < today || leavingDate < today || arrivalDate > leavingDate) {
    alert("Please enter valid arrival and departure dates.");
    return false;
  }

  return true;
}

function handleSearchButtonClick() {

  var searchTerm = document.querySelector('.form-control').value;
  alert("Search term: " + success);
  
}

document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.getElementById("searchButton");
  searchButton.onclick = handleSearchButtonClick;
});







