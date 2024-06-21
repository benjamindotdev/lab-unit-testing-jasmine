const divide = (numOne, numTwo) =>
  numOne == undefined || numTwo == undefined || isNaN(numOne) || isNaN(numTwo)
    ? undefined
    : numOne / numTwo;
