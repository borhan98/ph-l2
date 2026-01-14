// ? Stateless function to stateful function with clouser (Bad approach)
// const counter = (amount) => {
//   let count = 0;
//   count = count + amount;
//   return count;
// };
// console.log(counter(3));
// console.log(counter(2));


// ? it's a clouser
// const createCounter = () => {
//   let count = 0;

//   return (amount) => {
//     count += amount;
//     return count;
//   }
// }
// const counter = createCounter();

// console.log(counter(3));
// console.log(counter(2));
// console.log(counter(12));