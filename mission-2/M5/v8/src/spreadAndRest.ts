// spread operator

const friends = ['Rahim', 'Karim'];
const schoolFriends = ['Mofij', 'Mojnu'];
const collegeFriends = ['Intu', 'Pintu'];

friends.push(...schoolFriends);
console.log(friends);


const user = { name: 'Rahim', age: 18 };
const otherInfo = {phone: '017********', gender: 'male'};

const userInfo = {...user, ...otherInfo};
console.log(userInfo);


// rest operator
const sendInvitation = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Sent invitation to ${friend}`);
  })
}

sendInvitation('Rahim', 'Karim', 'Mofij', 'Mojnu');