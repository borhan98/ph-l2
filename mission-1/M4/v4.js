//? Problem statement

/**
 * given an array of integer numbers and a integer target number,
 * return the indexes of the two numbers such that they add up to target.
 * if there is no solution then return undefined
 * 
 * 
 * time complexity => of(n)
 */

/**
 * ? Input = [2, 11, 7, 15] and 9
 * ? Output: [0, 2] because (2 + 7 = 9)
 */


//? Solution

const twoSum = (arr, target) => {
  const numberMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    let complementNumber = target - currentNumber;

    if (numberMap.has(complementNumber)) {
      return [numberMap.get(complementNumber), i];
    }

    numberMap.set(currentNumber, i);
  }

  return undefined;
}

console.log(twoSum([2, 11, 7, 15, 4], 32));