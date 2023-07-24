/*
 * Complete the 'calculateScore' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING text
 *  2. STRING prefixString
 *  3. STRING suffixString
 */

function calculateScore(text, prefixString, suffixString) {
  // Write your code here
  for (let i = prefixString.length - 1; i >= 0; i--) {
    if (text.findIndex(prefixString.substring(i))) {
      prefixString = prefixString.substring(i);
    }
  }

  for (let i = 0; i < suffixString.length; i++) {
    if (text.findIndex(suffixString.substring(0, i))) {
      suffixString = suffixString.substring(0, i);
    }
  }

  return (prefixString + suffixString).length > text.length ? text : prefixString + suffixString ;
}
