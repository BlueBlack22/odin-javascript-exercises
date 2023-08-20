function roundToOneDecimal (temp) {
  return Math.round(temp * 10) / 10;
}

const convertToCelsius = function(tempInF) {
  const tempInC = ((tempInF - 32) * 5) / 9;
  
  if (Number.isInteger(tempInC)) {
    return tempInC;
  }
  return roundToOneDecimal(tempInC);
};

const convertToFahrenheit = function(tempInC) {
  const tempInF = ((tempInC * 9) / 5) + 32;
  
  if (Number.isInteger(tempInF)) {
    return tempInF;
  }
  return roundToOneDecimal(tempInF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
