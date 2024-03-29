function hideResults() {
  document.getElementById("python").classList.add("hidden");
  document.getElementById("ruby").classList.add("hidden");
  document.getElementById("cSharp").classList.add("hidden");
  document.getElementById("java").classList.add("hidden");
}

window.onload = function () {
  hideResults();
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
  };

  let button = document.querySelector("button");
  button.addEventListener("click", function () {
    inputTotal();
  });

  function inputTotal() {
    let nameInput = document.getElementById("name");
    let userName = nameInput.value;
    let colorInput = document.getElementById("color");
    let foodInput = document.getElementById("food");
    let animalInput = document.getElementById("animal");
    let locationInput = document.getElementById("location");
    let plutoInput = document.getElementById("pluto");

    let selectedValueColor = colorInput.options[colorInput.selectedIndex].value;
    let selectedValueFood = foodInput.options[foodInput.selectedIndex].value;
    let selectedValueAnimal = animalInput.options[animalInput.selectedIndex].value;
    let selectedValueLocation = locationInput.options[locationInput.selectedIndex].value;
    let selectedValuePluto = plutoInput.options[plutoInput.selectedIndex].value;

    let total =
      parseInt(selectedValueColor) +
      parseInt(selectedValueFood) +
      parseInt(selectedValueAnimal) +
      parseInt(selectedValueLocation) +
      parseInt(selectedValuePluto);
    console.log("total", total);

    if (total >= 30) {
      document.getElementById("python").classList.remove("hidden");
      document.getElementById("python").innerHTML = "<h1>Great news " + userName + "! Pluto will always be a planet in my eyes too. I think Python would be a great fit for you!</h1>";
    } else if (total < 30) {
      document.getElementById("ruby").classList.remove("hidden");
      document.getElementById("ruby").innerHTML = "<h1>Great news " + userName + "! I think Ruby is right up your alley!</h1>";
    } else if (total < 20) {
      document.getElementById("cSharp").classList.remove("hidden");
      document.getElementById("cSharp").innerHTML = "<h1>Great news " + userName + "! For C#, first you got to be sharp and I think you got what it takes!</h1>";
    } else {
      document.getElementById("java").classList.remove("hidden");
      document.getElementById("java").innerHTML = "<h1>Great news " + userName + "! I see heartache and pain in your future, followed by reward. I think JavaScript is the right path for you.</h1>";
    }
  }
};