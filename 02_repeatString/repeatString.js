const repeatString = function(string, repetitions) {
    let outputString = "";
    
    if (repetitions < 0) {
        outputString = "ERROR"
    } else {
        for (let i = 1; i <= repetitions; i++) {
            outputString += string;
        }
    }

    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
