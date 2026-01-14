const numbers = [3, 7, 3, 7];
const hasEvenNumber = numbers.some((value) => value % 2 === 0);
// console.log(hasEvenNumber);


const currentUserRole = ["user", "editor", "manager"];
const featureAccessRole = ["admin", "manager"];

const casAccess = currentUserRole.some((role) => {
  return featureAccessRole.includes(role);
});

// console.log(casAccess);

const arr = Array.from([1, 2, 3, 4, 5], (v, i) => {
  return [i, v];
});
// console.log(arr);

const range = (start, end, step) => Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => {
  return start + (i * step);
});

console.log(range(1, 11, 2));