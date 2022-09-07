const readline = require("readline").createInterface({
    input:  process.stdin,
    output: process.stdout
});

const bmiChecker = (bi) => {
    let bmi = parseFloat(bi);
    let bmiStat = "";
    if(bmi < 18.5){
        bmiStat = "Underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        bmiStat = "Normal Weight";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        bmiStat = "Overweight";
    }
    else if(bmi >= 30){
        bmiStat = "Obese";
    }
    return bmiStat;
}

readline.question("Enter BMI: ", bm => {
    console.log("You are " + bmiChecker(bm));
    readline.close();
})