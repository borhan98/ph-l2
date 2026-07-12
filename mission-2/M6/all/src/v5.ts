const createArrayWithString = (value: String) => [value];

const createArrayWithNumber = (value: Number) => [value];

const createArrayWithObj = (value: { id: Number; name: String }) => [value];

const createArrayWithGeneric = <T>(value: T) => [value];




// const arrString = createArrayWithString('Hello..!!');
// const arrNumber = createArrayWithNumber(1);
// const arrObj = createArrayWithObj({ id: 101, name: 'World' });

const arrString = createArrayWithGeneric('Hello..!!');
const arrNumber = createArrayWithGeneric(1);
const arrObj = createArrayWithGeneric({ id: 1, name: 'World' });


const createArrayTouple = (param1: string, param2: string) => [param1, param2];

const createArrayToupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};

const res1 = createArrayToupleWithGeneric(121, 'hello..');
const res2 = createArrayToupleWithGeneric('world', false);

const res3 = createArrayToupleWithGeneric(false, true);

const res4 = createArrayToupleWithGeneric(
  {
    id: 121,
    name: 'abc',
    age: 11
  },
  {
    id: 1212,
    name: 'xyz',
    isMarried: false,
    gender: null,
    hasCar: false
  }
)