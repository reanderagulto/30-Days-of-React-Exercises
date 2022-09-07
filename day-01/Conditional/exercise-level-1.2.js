const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let yourAge = 0;
let myAge = 0;

readline.question("Enter Your Age: ", age => {
    yourAge = age; 
    readline.question("My Age is: ", age => {
        myAge = age; 
        let promptAge = "";
        let computeAge = 0;
        if (myAge > yourAge){
            promptAge = "younger";
            computeAge = myAge - yourAge;
        }
        else if(yourAge > myAge){
            promptAge = "older";
            computeAge = yourAge - myAge;
        }

        console.log("You are " + computeAge + " " + promptAge + " than me.");
        readline.close();
    });
});