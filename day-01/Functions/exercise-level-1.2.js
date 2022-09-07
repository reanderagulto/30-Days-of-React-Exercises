const readline = require("readline").createInterface({
    input:  process.stdin,
    output: process.stdout
});

const sum = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

readline.question("Enter a number: ", num1 => {
    readline.question("Enter another number: ", num2 => {
        let result = sum(num1, num2);
        console.log("Sum of 2 numbers is: " + result);
        readline.close();
    });
});