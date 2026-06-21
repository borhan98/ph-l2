type User = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
    age: number;
  },
  gender: 'male' | 'female';
  isMarried: boolean;
}

const user1: User = {
  id: '121',
  name: {
    firstName: 'Mr',
    lastName: "X",
    age: 76
  },
  gender: 'male',
  isMarried: true,
}

const user2: User = {
  id: '121',
  name: {
    firstName: 'Mrs',
    lastName: "X",
    age: 70
  },
  gender: 'male',
  isMarried: true,
}
