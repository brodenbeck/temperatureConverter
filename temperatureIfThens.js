var temp = 300;
var unit = "C";
var convertedTemp;

if(unit === "F") {
	convertedTemp = (temp - 32) * 5 / 9;
	displayTemp = temp + " degrees Fahrenheit converts to " + convertedTemp + " degrees Celsius."
}
else if (unit === "C") {
	convertedTemp = (temp * 9/5 + 32);
	displayTemp = temp + " degrees Celsius converts to " + convertedTemp + " degrees Fahrenheit."
}
else {
	displayTemp = 'Please indicate whether your temperature is in Fahrenheit ("F") or in Celsius ("C").'
}

console.log(displayTemp);