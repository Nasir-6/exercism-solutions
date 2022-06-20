export function decodedValue(colorKeys:string[]) : number {
  // Allows you to make any objectLiteral
  interface ObjectLiteral {
    [key: string]: string;
  }
  // have an object with key and value pairs
  let RESISTOR_CODES:ObjectLiteral = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  }
  console.log(RESISTOR_CODES)
  
  return parseInt(RESISTOR_CODES[colorKeys[0]] + RESISTOR_CODES[colorKeys[1]])
}
