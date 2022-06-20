export function decodedResistorValue(colorKeys:string[]) {
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
  let baseValue = parseInt(RESISTOR_CODES[colorKeys[0]] + RESISTOR_CODES[colorKeys[1]])

  //convert third color into power of 10 - number
  let powerOf10 = parseInt(RESISTOR_CODES[colorKeys[2]])
  let units = "ohms"

  
  if(powerOf10 >= 3 || ((powerOf10>=2) && (colorKeys[1] === "black"))){
    // if 3 or more - add kiloOhms
    units = "kilo" + units
    // also take away 3 from third color to get remaining 0s 
    powerOf10 = powerOf10 - 3;
  }
  
  // multiply by 10^remaining 0s
  
  return (baseValue*10**powerOf10) + " " + units;
}
