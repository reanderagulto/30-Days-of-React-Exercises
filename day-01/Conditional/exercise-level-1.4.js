const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number: ", number => {
    if((number % 2) === 0){
        console.log(number + " is an even number");
    }
    else{
        console.log(number + " is an odd number");
    }
    readline.close();
});