const validateSIN = (SIN: string) => {
  const checkIfOdd = (index: number) => {
    if (index % 2 !== 0) {
      return true; // odd index number
    } else {
      return false; // even index number
    }
  };

  const SINarray = SIN.split('').map((num, index) => {
    if (checkIfOdd(index) === true) return Number(num) * 2;
    else return Number(num);
  });

  let sumOfSINArray = 0;
  // for numbers over 9, split into separate digits and sum
  SINarray.forEach(num => {
    if (num <= 9) {
      sumOfSINArray += num;
    } else {
      num
        .toString()
        .split('')
        .map(digit => (sumOfSINArray += Number(digit)));
    }
  });

  if (sumOfSINArray % 10 === 0) {
    // divisible by 10 - valid SIN
    return true;
  } else {
    // not divisible by 10 - invalid SIN
    return false;
  }
};

export default validateSIN;
