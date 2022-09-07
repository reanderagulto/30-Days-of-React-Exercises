const readline = require("readline").createInterface({
    input:  process.stdin,
    output: process.stdout
});

const adder = 32;
const multiplier = 9 / 5;

const convertCToF = (celcius) => {
    return (parseFloat(celcius) * multiplier) + adder;
}

readline.question("Celcius: ", cel => {
    console.log("Fahrenheit: " + convertCToF(cel));
    readline.close();
});
