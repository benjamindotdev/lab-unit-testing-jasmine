const add = (numOne, numTwo) =>
  numOne == undefined || numTwo == undefined || numOne == NaN || numTwo == NaN
    ? undefined
    : numOne + numTwo;
