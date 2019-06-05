module.exports = {
  romanToNumeric: value => {
    let array = value.split("").map(letter => R2N[letter]);
    let final = [];

    for (i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) {
        let num = array[i + 1] - array[i];
        final.push(num);
        i++;
      } else {
        final.push(array[i]);
      }
    }

    return final.reduce((acc, curr) => acc + curr);
  },

  numericToRoman: value => {
    if (value % 10 !== 4 || value % 10 !== 9) {
      let lowerBound = Object.keys(N2R).reduce((acc, curr, i, array) => {
        if (curr < value && array[i + 1] > value) {
          acc = curr;
        }
        return acc;
      });
      console.log({ value, lowerBound });
    }
    return "I";
  }
};

const R2N = {
  I: 1,
  IV: 4,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const N2R = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};
