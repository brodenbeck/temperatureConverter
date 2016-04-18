var fahrenheit = 400;

var celsius = 0;

function toCel(f) {
	convertedTemp = (5 / 9) * (f - 32);
}

toCel(fahrenheit);

console.log(fahrenheit + " degrees Fahrenheit converts to " + convertedTemp + " degrees Celsius.")

function toFahr(c) {
	convertedTemp = (9 / 5) * c + 32;
}

toFahr(celsius);

console.log(celsius + " degrees Celsius converts to " + convertedTemp + " degrees Fahrenheit.")
