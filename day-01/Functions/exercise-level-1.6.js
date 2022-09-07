const readline = require("readline").createInterface({
    input:  process.stdin,
    output: process.stdout
});

const months = ["january", "february", "march", "april", "may", "june", "july", "august",  "september", "october", "november", "december"];

const season = (month) => {
    let searchmonth = month.toLowerCase();
    let monthIndex = months.indexOf(searchmonth);
    let retString = "";
    if(monthIndex >= 0 ){
        if(monthIndex == 8 || monthIndex == 9 || monthIndex == 10){
            retString = "Autumn";
        }
        else if(monthIndex == 11 || monthIndex == 0 || monthIndex == 1){
            retString = "Winter";
        }
        else if(monthIndex == 2 || monthIndex == 3 || monthIndex == 4){
            retString = "Spring";
        }
        else if(monthIndex == 5 || monthIndex == 6 || monthIndex == 7){
            retString = "Summer";
        }
    }
    else{
        retString = "Invalid Month";
    }
    return retString;
}

readline.question("Month: ", mon => {
    console.log(season(mon));
    readline.close();
});