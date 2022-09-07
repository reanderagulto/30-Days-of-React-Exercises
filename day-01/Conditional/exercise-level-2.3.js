const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

readline.question("What is the day today? ", day => {
    const searchKey = day.toLowerCase();
    const index = daysOfWeek.indexOf(searchKey);
    if( index >= 0 && index <= 4){
        console.log(day + " is a working day");
    }
    else if(index >= 5 && index <= 6){
        console.log(day + " is a weekend");
    }
    else{
        console.log("Invalid input");
    }
    readline.close();
});
