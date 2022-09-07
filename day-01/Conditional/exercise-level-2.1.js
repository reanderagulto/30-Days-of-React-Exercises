const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter student\'s grade: ", grade => {
    let gradeEval = "";
    if(grade >= 80 && grade <= 100){
        gradeEval = "A";
    }
    else if(grade >= 70 && grade <= 79){
        gradeEval = "B";
    }
    else if(grade >= 60 && grade <= 69){
        gradeEval = "C";
    }
    else if(grade >= 50 && grade <= 59){
        gradeEval = "D";
    }
    else if(grade >= 0 && grade <= 49){
        gradeEval = "F";
    }
    console.log("Student\'s Grade is " + gradeEval);
    readline.close();
})