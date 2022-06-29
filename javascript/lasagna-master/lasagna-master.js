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
