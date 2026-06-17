// normal function
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
const total = addNormal(2, 2);


// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;
const totalArrow = addArrow(3, 3);


// method
const poorPerson = {
  name: 'Borhan',
  balance: 0,
  addBalance(balance:number):number {
    return this.balance + balance;
  }
}

poorPerson.addBalance(10000);


// callback function
const arrOfNumbers: number[] = [3, 4, 20];
const squaredNumbers = arrOfNumbers.map((ele: number): number => ele * ele);