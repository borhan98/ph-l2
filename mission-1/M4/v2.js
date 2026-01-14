// * Problem statement

/**
 * Yor are give two large arrays listA and listB, Each array contains user object
 * Each user object is guaranteed to have an unique id property as string and may contain other data, such as name
*/
/**
 * Your task is write a efficient function that take both lists as an input and
 * return the total count of users that are present is both list
 */

// ! and make sure, don't change anything in data setup

// ------------- Data Setup Block --------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}


//! slow and bad approach
const slowMutualUsers = (usersA, usersB) => {
  const startTime = performance.now();

  const commonUsers = [];
  usersA.forEach(userA => {
    usersB.forEach(userB => {
      if (userA.id === userB.id) {
        commonUsers.push(userB);
      }
    })
  })

  const endTime = performance.now();
  return { count: commonUsers.length, tookTime: endTime - startTime };
}


// !fast approach
const fastMutualUsers = (usersA, usersB) => {
  const startTime = performance.now();

  const mutualUsers = [];
  const userIdListA = new Set(usersA.map(user => user.id));
  
  usersB.forEach(userB => {
    if(userIdListA.has(userB.id)) {
      mutualUsers.push(userB);
    }
  })

  const endTime = performance.now();
  return {count: mutualUsers.length, tookTime: (endTime - startTime).toFixed(2)}
}



console.log(slowMutualUsers(usersA, usersB));
console.log(fastMutualUsers(usersA, usersB));