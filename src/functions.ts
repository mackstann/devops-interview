function addNumbers(numbers: string) {
  const numbersArray = numbers.split('_');
  return parseInt(numbersArray[0], 10) + parseInt(numbersArray[1], 10);
}

function subtractNumbers(numbers: string) {
  const numbersArray = numbers.split('_');
  return parseInt(numbersArray[0], 10) - parseInt(numbersArray[1], 10);
}

export { addNumbers, subtractNumbers };
