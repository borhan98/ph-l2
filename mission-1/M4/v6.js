const binarySearch = (arr, target) => {
  // Start searching from the first index
  let low = 0;

  // End searching at the last index
  let high = arr.length - 1;

  console.log("Array:", arr);
  console.log("Target:", target);
  console.log("------------------------");

  // Continue searching while low is less than or equal to high
  while (low <= high) {
    console.log(`low = ${low}, high = ${high}`);

    // Find the middle index
    const mid = Math.floor((low + high) / 2);

    // Get the value at the middle index
    const guess = arr[mid];

    console.log(`mid = ${mid}`);
    console.log(`guess = arr[${mid}] = ${guess}`);

    // Check if we found the target
    if (guess === target) {
      console.log(`✅ Found target ${target} at index ${mid}`);
      return mid;
    }

    // If guess is greater than target,
    // target must be on the LEFT side
    else if (guess > target) {
      console.log(
        `${guess} > ${target}, so search LEFT side`
      );

      // Move high pointer before mid
      high = mid - 1;
    }

    // If guess is smaller than target,
    // target must be on the RIGHT side
    else {
      console.log(
        `${guess} < ${target}, so search RIGHT side`
      );

      // Move low pointer after mid
      low = mid + 1;
    }

    console.log("------------------------");
  }

  // If loop ends, target was not found
  console.log(`❌ Target ${target} not found`);
  return -1;
};

// console.log("Result:", binarySearch([3, 5, 6, 7, 9, 11], 7));
console.log("Result:", binarySearch([2, 4, 6, 8, 10, 12], 3));