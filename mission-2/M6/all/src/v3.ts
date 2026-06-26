// dynamically generalize
type GenericArray<T> = Array<T>;

// const friends: string[] = ['Omok', 'Tomok', 'Comok'];
const friends: GenericArray<string> = ['Omok', 'Tomok', 'Comok'];


// const numbers: number[] = [11, 22, 33, 44];
const numbers: GenericArray<number> = [11, 22, 33, 44];


// const isEligibleList: boolean[] = [false, true, false];
const isEligibleList: GenericArray<boolean> = [false, true, false];

type Users = {
  name: string,
  age: number
}

const users: GenericArray<{name: string, age: number}> = [
  {
    name: 'Y',
    age: 2
  },
  {
    name: 'Z',
    age: 4
  }
]