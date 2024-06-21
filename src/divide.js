const divide = (numOne, numTwo) =>
  numOne == undefined || numTwo == undefined || isNaN(numOne) || isNan(numTwo)
    ? undefined
    : numOne / numTwo;
