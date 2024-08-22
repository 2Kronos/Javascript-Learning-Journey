const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    temp = Number(textBox.value);  // Convert the input to a number

    if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(2)} °F`;  // Display result with 2 decimal places
    } else if (toCelsius.checked) {
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(2)} °C`;
    } else {
        result.textContent = "Select a unit";
    }
}
