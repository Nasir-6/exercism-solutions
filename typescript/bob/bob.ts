export function hey(message: string): string {

  // check if there are letters
  message = message.trim()
  if (message === "") {
    return 'Fine. Be that way!'
  }

  let isQuestion = message[message.length-1] === "?"
  let isAllCapsAndHasLetters = message.toUpperCase() === message && /[a-z]/i.test(message)

  if (isQuestion) {
    if (isAllCapsAndHasLetters) {
      return "Calm down, I know what I'm doing!";
    } else {
      return 'Sure.'
    }
  }

  if (isAllCapsAndHasLetters) {
    return 'Whoa, chill out!';
  }
  

  return 'Whatever.'
}
