const user = {
  name: {
    firstName: 'Md',
    middleName: 'Borhan',
    lastName: 'Uddin'
  },
  color: 'red',
  age: 20
}

const { color, name: { firstName, middleName: nickName } } = user;
console.log(color, firstName, nickName);


const friends = ['rahim', 'karim', 'mofij']
const [, , myFriend] = friends;
console.log(myFriend);