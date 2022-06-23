export function hey(message: string): string {

  // check if there are letters
  if (!/[a-z0-9]/i.test(message)) {
    return 'Fine. Be that way!'
  }

  // if question (check for ? at last index!) - trim for whitespace
  if (message.trim()[message.trim().length-1] === "?") {

    // check if all caps (.toUpperCase === normal) && contains letters 
    if (message.toUpperCase() === message && /[a-z]/i.test(message)) {
      return "Calm down, I know what I'm doing!";
    } else {

      return 'Sure.'
    }
  }

  if (message.toUpperCase() === message && /[a-z]/i.test(message)) {
    // if all caps && contains some letters 
    return 'Whoa, chill out!';
  }


  return 'Whatever.'
}
