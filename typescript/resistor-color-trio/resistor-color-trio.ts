// Improved solution courtesy of https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/jimmux


// As const is used to create a readonly number[] without which it will be a mutable array!
// Better explanation can be found below
// https://stackoverflow.com/questions/66993264/what-does-the-as-const-mean-in-typescript-and-what-is-its-use-case
const RESISTOR_CODES = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const


// create a new type called color which is a literal union of all the types found in the RESISTOR_CODES
// typeof RESISTOR_CODES gives {black:"0", brown:"1" ... etc.}
// keyof of the above typeof gives a union of all the literal types ( black | brown | red | .... etc. )
// i.e says the type colour can only be the ones listed in the RESISTOR_CODES object
// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript 
type colour = keyof typeof RESISTOR_CODES;

// Create another type called Resistor which can only be a trio of the available colours - This will be the type for the input!!
type resistor = [colour, colour, colour];



export function decodedResistorValue([first_digit_code, second_digit_code, exponent_code] : resistor) {

  let resistor_value = ((RESISTOR_CODES[first_digit_code]*10 ) + RESISTOR_CODES[second_digit_code]) * 10 ** RESISTOR_CODES[exponent_code]
  // Genius method of converting 1,000s with kilo - courtesy of https://exercism.org/tracks/typescript/exercises/resistor-color-trio/solutions/jimmux
  return `${resistor_value} ohms`.replace("000 ", " kilo")
}
