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