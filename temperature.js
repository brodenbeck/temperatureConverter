var fahrenheit = 400;

var celsius = 0;

function toCel(f) {
	celsius = (5 / 9) * (f - 32);
}

toCel(fahrenheit);

console.log(fahrenheit + " degrees Fahrenheit converts to " + celsius + " degrees Celsius.")

function toFahr(c) {
	fahrenheit = (9 / 5) * c + 32;
}

toFahr(celsius);

console.log(celsius + " degrees Celsius converts to " + fahrenheit + " degrees Fahrenheit.")
