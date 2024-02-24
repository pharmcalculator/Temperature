function convertTemperature(event) {
    event.preventDefault();

    const temperatureInput = document.getElementById("temperature");
    const conversionTypeSelect = document.getElementById("conversionType");
    const resultElement = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const conversionType = conversionTypeSelect.value;

    if (!isNaN(temperature)) {
        let convertedTemperature;
        let resultText;

        if (conversionType === "fahrenheitToCelsius") {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultText = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        } else if (conversionType === "celsiusToFahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
            resultText = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        }

        temperatureInput.value = convertedTemperature.toFixed(2);
        resultElement.textContent = resultText;
    } else {
        resultElement.textContent = "Please enter a valid temperature value.";
    }
}