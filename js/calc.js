document.addEventListener("DOMContentLoaded", function(){

  // Global variables.
  var calculationString = "";

  // Create Array variables for each type of button.
  var numberButtons = document.getElementsByClassName("buttonNum");
  createListeners(numberButtons);

  var operatorButtons = document.getElementsByClassName("operator");
  createListeners(operatorButtons);

  var equalsButton = document.getElementsByClassName("equals");
  equalsButton[0].addEventListener("click", equalsButtonClicked);

  var clearButton = document.getElementsByClassName("buttonClear");
  clearButton[0].addEventListener("click", clearButtonClicked);

  // Create event listeners for number and operator buttons.
  function createListeners(elementsArray) {
    for (var i = 0; i < elementsArray.length; i++) {
      if (isNaN(elementsArray[i].innerHTML)) {
        elementsArray[i].addEventListener("click", operatorButtonClicked);
      } else {
        elementsArray[i].addEventListener("click", numButtonClicked);
      }
    }
  }

  // This is called when a number button is clicked.
  function numButtonClicked() {
    calculationString += this.innerHTML;
    updateScreen();
  }

  // This is called when an operator button is clicked.
  function operatorButtonClicked() {
    var lastChar = calculationString[calculationString.length - 1];
    if (isNaN(lastChar)) {
      calculationString += "";
    } else {
      calculationString += this.innerHTML;
      updateScreen();
    }
  }

  // This is executed when the equals button is clicked.
  function equalsButtonClicked() {
    // If there is nothing to calculate do nothing.
    if (isNaN(calculationString[0]) || isNaN(calculationString[calculationString.length - 1])) {
      return;
    } else {
      var result = eval(calculationString);
      calculationString = result;
      updateScreen();
      calculationString = "";
    }
  }

  // This is executed when the AC button is clicked.
  function clearButtonClicked() {
    calculationString = "";
    var screen = document.getElementById("screen");
    screen.innerHTML = "Sparta Calculator";
  }

  // THis updates the calculator calculation window when called.
  function updateScreen() {
    var screen = document.getElementById("screen");
    screen.innerHTML = calculationString;
  }

});
