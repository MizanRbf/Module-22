// Write a function to convert temperature from Celsius to Fahrenheit. ( 1 Fahrenheit = -17.2222 Cel )

function toFahrenheit(celsius) {
let fahrenheit = celsius / -17.2222;
return fahrenheit;

}

let fahrenheit2 = toFahrenheit(7);
console.log(fahrenheit2);

// Write a function to convert door from inch to feet. 1 foot = 12 inch

function toFeet (inch){
let feet = inch / 12;
return feet;
}
let feetResult = toFeet(24);
console.log(feetResult);