const readline = require("readline").createInterface({
    input:  process.stdin,
    output: process.stdout
});

const pi = 3.14;
const _areaOfCircle = (radius) => {
    let result = pi * (Math.pow(parseFloat(radius), 2));
    return result;
}

readline.question("Enter Radius: ", rad => {
    let area = _areaOfCircle(rad);
    console.log("Area of Circle is " + area);
    readline.close();
});
