const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your Age: ", age => {
    if(age >= 18){
        console.log("You are old enough to drive.");
    }
    else{
        let waitAge = 18 - age; 
        console.log("You are left with " + waitAge + " year(s) to drive");
    }
    readline.close();
});