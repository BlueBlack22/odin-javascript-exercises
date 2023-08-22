const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (newString === newString.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }  
}

// Do not edit below this line
module.exports = palindromes;
