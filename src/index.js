module.exports = function zeros(expression) {


  // break the string into an array
  let arr = expression.split('*');
  let counter = 0;
  let twoCounter = false;

  for (i = 0; i <= arr.length - 1; i++) {

    // what type of factorial
    let factorial = 0;
    for (let char of arr[i]) {
      if (char === '!') factorial++;
    }

    // delete chats '!' in item and change type on number
    arr[i] = +arr[i].replace(/!/g, "");

    // if ordinary factorial '!'
    if (factorial === 1) {

      let j = 1;
      let result = 0;
      twoCounter = true;
      while (arr[i] >= j) {
        j *= 5;
        result += Math.floor(arr[i] / j);
      }
      counter += result;
    } else {
      // if double factorial '!!'
      let j;
      if (arr[i] % 2 === 0) {
        j = 2;
        twoCounter = true;
      } else {
        j = 1;
      }
      let result = 0;
      while (arr[i] >= j) {
        if (j % 5 === 0) result++;
        if (j === 25 || j === 50 || j === 75 || j === 100) result++;
        j += 2;
      }
      counter += result;
    }

  }
  // if there is no 2 in the factors
  if (!twoCounter) counter = 0;
  return counter;
}