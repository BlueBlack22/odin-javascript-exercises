const removeFromArray = function(inputArray, ...itemsToRemove) {
    for (let i = 0; i < itemsToRemove.length; i++) {
        inputArray = inputArray.filter((item) => item !== itemsToRemove[i]);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;


/*
const removeFromArray = function(inputArray, itemToRemove) {
    return result = inputArray.filter((item) => item !== itemToRemove)
};
*/