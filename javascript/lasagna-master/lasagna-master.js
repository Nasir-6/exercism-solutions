/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 *
 * @param {number|undefined} timeLeft
 * @returns {string} error message
 */
export function cookingStatus(timeLeft){
    if(timeLeft === 0) return 'Lasagna is done.'
    if(timeLeft === undefined) return 'You forgot to set the timer.'
    return 'Not done, please wait.'
}


/**
 *
 * @param {string[]} layers
 * @param {number|undefined} avgTimeForEachLayer
 * @returns {number} total prep time
 */
 export function preparationTime(layers, avgTimeForEachLayer = 2){
    return layers.length * avgTimeForEachLayer
}

/**
 *
 * @param {string[]} layers
 * @returns {{noodles, sauce}} object containing quantaties for noodle and sauce
 */
 export function quantities(layers){
    let quantities = {
        noodles: 0,
        sauce: 0
    }
    for(let i=0; i<layers.length; i++){
        if(layers[i] === 'noodles'){
            quantities.noodles = quantities.noodles + 50
        } else if (layers[i] === 'sauce'){
            quantities.sauce = quantities.sauce + 0.2
        }
    }
    return quantities
}

