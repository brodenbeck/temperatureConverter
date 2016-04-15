var temp = 32;
var unit = "F";
var convertedTemp;

if(unit === "F") {
	convertedTemp = (temp - 32) * 5 / 9;
}
else {
	convertedTemp = (temp * 9/5 + 32);
}

console.log(convertedTemp);