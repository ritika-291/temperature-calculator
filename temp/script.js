function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("tempInput").value);
    const tempUnit = document.getElementById("tempUnit").value;
    let celsius, fahrenheit, kelvin;

    if (tempUnit === "celsius") {
        celsius = tempValue;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (tempUnit === "fahrenheit") {
        fahrenheit = tempValue;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (tempUnit === "kelvin") {
        kelvin = tempValue;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("output").innerHTML = 
        `Celsius: ${celsius.toFixed(2)} °C<br>` +
        `Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>` +
        `Kelvin: ${kelvin.toFixed(2)} K`;
}