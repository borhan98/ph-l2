// keyof constraint

type RichPeopleVehicle = {
  car: string;
  bike: string;
  helicopter: string;
}

type MyVehicle1 = 'car' | 'bike' | 'helicopter';
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle1: MyVehicle1 = 'bike';
// const myVehicle2: MyVehicle2 = 'ship';

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  }
}

const user = {
  id: 111,
  name: 'xyz',
  address: {
    city: 'CD',
  }
}

// const myId = user.id;
const myId = user['id'];
const myName = user['name'];
const myAddress = user['address'];

console.log({myId, myName, myAddress});

const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
}

const result1 = getPropertyFromObj(user, 'name');

const product = {
  brand: "HP",
}

const result2 = getPropertyFromObj(product, 'brand');
console.log(result1, result2);
