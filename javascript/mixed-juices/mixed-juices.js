// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if(name === 'Pure Strawberry Joy') return 0.5
  if(name === 'Energizer' || name === 'Green Garden') return 1.5
  if(name === 'Tropical Island') return 3
  if(name === 'All or Nothing') return 5
  return 2.5
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if(wedgesNeeded === 0 || limes.length === 0) return 0;
  // keep going through limes whilst wedgesNeeded is 0 or limeNumber < limes.length
  let limeNumber = 0;
  while(wedgesNeeded>0 && limeNumber < limes.length){
    if(limes[limeNumber] === 'small') wedgesNeeded = wedgesNeeded - 6;
    if(limes[limeNumber] === 'medium') wedgesNeeded = wedgesNeeded - 8
    if(limes[limeNumber] === 'large') wedgesNeeded = wedgesNeeded - 10
    limeNumber++
  }
  return limeNumber
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(timeLeft>0 && orders.length>0){
    timeLeft = timeLeft - timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}
