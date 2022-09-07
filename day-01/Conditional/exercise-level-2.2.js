const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const months = ["january", "february", "march", "april", "may", "june", "july", "august",  "september", "october", "november", "december"];

readline.question("Enter month: ", month => {
    searchmonth = month.toLowerCase();
    let monthIndex = months.indexOf(searchmonth);
    if(monthIndex >= 0 ){
        if(monthIndex == 8 || monthIndex == 9 || monthIndex == 10){
            console.log(month + " is Autumn season" );
        }
        else if(monthIndex == 11 || monthIndex == 0 || monthIndex == 1){
            console.log(month + " is Winter season" );
        }
        else if(monthIndex == 2 || monthIndex == 3 || monthIndex == 4){
            console.log(month + " is Spring season" );
        }
        else if(monthIndex == 5 || monthIndex == 6 || monthIndex == 7){
            console.log(month + " is Summer season" );
        }
    }
    else{
        console.log("Invalid Month");
    }
    readline.close();
})