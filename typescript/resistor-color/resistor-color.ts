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

type colour = keyof typeof RESISTOR_CODES;

export const colorCode = (bandColour:colour) :number => {
  return RESISTOR_CODES[bandColour];
}

export const COLORS = Object.keys(RESISTOR_CODES) 
