const readline = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout
});

let fName = "";
let lName = ""; 

readline.question("Enter Your First Name: ", fn => {
    fName = fn;
    readline.question("Enter Your Last Name: ", ln => {
        lName = ln;
        console.log(fullName(fName, lName));
        readline.close();
    });
});

function fullName(firstName, lastName){
    return "Your full name is " + firstName + " " + lastName;
}