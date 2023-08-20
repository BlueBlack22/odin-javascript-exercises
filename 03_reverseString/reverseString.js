const reverseString = function(inputString) {
    const stringLength = inputString.length;
    let tempString = [];
    let outputString = "";
    for (i = 0; i < stringLength; i++) {
        tempString[i] = inputString.charAt(i);
    }

    for (i = stringLength - 1; i >= 0; i--) {
        outputString += tempString[i];
    }

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
