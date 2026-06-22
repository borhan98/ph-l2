// ? ternary operator
// ?? nullish operator (Work only with undefined and null value)
// ?. optional chaining

const isEligibleToMarry = (age: number) => {
  const requiredAge = 21;
  const result = age >= requiredAge ? 'Eligible to marry' : 'Not eligible to marry'; // ? ternary
  console.log(result);
}

isEligibleToMarry(20);

// nullish operator
const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light';
console.log(selectedTheme);


// const isAuthenticated = null;
const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : 'You are guest.';
const resultWithNullish = isAuthenticated ?? 'You are guest.';

console.log({resultWithNullish}, {resultWithTernary});