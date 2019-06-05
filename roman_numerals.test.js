const RomanNumerals = require("./roman_numerals");

const assertEqual = (actual, expected) => {
  console.log(`Actual: '${actual}', Expected: '${expected}'`);

  if (actual == expected) console.log("pass");
  else console.log("fail");
};

// ROMAN TO NUMERIC

test("convert I", () => {
  expect(RomanNumerals.romanToNumeric("I")).toBe(1);
});

test("convert", () => {
  expect(RomanNumerals.romanToNumeric("II")).toBe(2);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("III")).toBe(3);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("IV")).toBe(4);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("V")).toBe(5);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("VI")).toBe(6);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("VII")).toBe(7);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("VIII")).toBe(8);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("IX")).toBe(9);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("X")).toBe(10);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("XII")).toBe(12);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("XXIX")).toBe(29);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("CCXCI")).toBe(291);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("CM")).toBe(900);
});
test("convert", () => {
  expect(RomanNumerals.romanToNumeric("MCMXCIX")).toBe(1999);
});

// // NUMERIC TO ROMAN
// test("convert 1", () => {
//   expect(RomanNumerals.numericToRoman(1)).toBe("I");
// });
// assertEqual(RomanNumerals.numericToRoman(2), 'II')
// assertEqual(RomanNumerals.numericToRoman(3), 'III')
// assertEqual(RomanNumerals.numericToRoman(4), 'IV')
// assertEqual(RomanNumerals.numericToRoman(5), 'V')
// assertEqual(RomanNumerals.numericToRoman(6), 'VI')
// assertEqual(RomanNumerals.numericToRoman(7), 'VII')
// assertEqual(RomanNumerals.numericToRoman(8), 'VIII')
// assertEqual(RomanNumerals.numericToRoman(9), 'IX')
// assertEqual(RomanNumerals.numericToRoman(10), 'X')
// assertEqual(RomanNumerals.numericToRoman(12), 'XII')
// assertEqual(RomanNumerals.numericToRoman(29), 'XXIX')
// assertEqual(RomanNumerals.numericToRoman(38), 'XXXVIII')
// assertEqual(RomanNumerals.numericToRoman(1999), 'MCMXCIX')
