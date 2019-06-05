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
    let nums = Object.keys(N2R)
      .reverse()
      .map(num => parseInt(num));

    let final = [];
    
    for (let i = 0; i < nums.length; i++) {
      let quantity = Math.floor(value / nums[i]);
      value -= quantity * nums[i];
      final = [...final, ...Array(quantity).fill(nums[i])];
    }

    return final.map(num => N2R[num]).join("");
  }
};

const R2N = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const N2R = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};
