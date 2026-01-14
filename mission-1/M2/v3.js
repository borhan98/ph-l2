// ? number sorting
const numbers = [2, 3, 5, 6, 3, 6, 7, 8];
// const sortedNumbers = numbers.sort((a, b) => b - a);
// console.log(sortedNumbers);



// ? character sorting
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Guava",
  "Lychee",
  "Blueberry",
  "Raspberry",
  "Coconut",
  "Pomegranate"
];
// const ascendingOrders = [...fruits].sort((a, b) => a.localeCompare(b));
// console.log(ascendingOrders);


// ? nested array flat
const nestedArrOfNumbers = [4, 7, 8, [3, 4, [ 4, [2, 51, [32, [43, 32, [12, 11, 1, [32, 32]]]]]]]];
// const flatNumbers = nestedArrOfNumbers.flat(Infinity);
// console.log(flatNumbers);


// ? nested array of string
const tagForPost = [
  ["javascript", "react", "nextjs"],
  ["vuejs", "javascript", "golang"],
  ["rust", "html", "css"],
  ["react", "nextjs", "expressjs", "nodejs", "golang"]
]
const flatTags = [...new Set(tagForPost.flat())];
console.log(flatTags);