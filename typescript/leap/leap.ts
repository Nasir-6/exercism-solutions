export function isLeap(year:number) {
  // is /4 AND NOT /100 OR /4 AND /100 AND /100
  let isDivisibleBy4 = (year % 4 === 0);
  let isDivisibleBy100 = (year % 100 === 0);
  let isDivisibleBy400 = (year % 400 === 0);

  return (isDivisibleBy4 && !isDivisibleBy100) || (isDivisibleBy4 && isDivisibleBy100 && isDivisibleBy400)
}
