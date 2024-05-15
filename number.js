function Numbers(input) {
    if (!input) {
        return 0;
    }
    const values = input.split(',');
    const sum = values.reduce((acc, val) => {
      const num = parseFloat(val.trim());
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
    return sum;
  }
  console.log(Numbers("35,21,39")); 
  console.log(Numbers("0.5,abc,11.7"));
  console.log(Numbers(""));
  console.log(Numbers("10, , x, 10")); 