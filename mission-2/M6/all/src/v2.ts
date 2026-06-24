type User = {
  name: string;
  age: number;
}

// only for objects (object, array, function)
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: 'admin' | 'user';
}

type UserWithRole = User & Role;
interface IUserWithRole extends IUser {
  role: 'admin' | 'user' | 'moderator';
}


const user1: UserWithRole = {
  name: 'Mrs. X',
  age: 88,
  role: 'admin',
}

const user2: IUserWithRole = {
  name: 'Mr. X',
  age: 100,
  role: 'admin',
}

// function
// type Add = (
//   num1: number,
//   num2: number
// ) => number;

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;

// type Friends = string[];
interface Friends {
  [index: number]: string;
}

const friends: Friends = ['Omok', 'Tomok', 'Comok'];
