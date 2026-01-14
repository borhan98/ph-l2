const users = [
  { id: 1001, name: "Alice" },
  { id: 1002, name: "Bob" },
  { id: 1003, name: "Charlie" },
  { id: 1004, name: "Diana" },
  { id: 1005, name: "Evan" },
  { id: 1006, name: "Fatima" },
];

const posts = [
  { id: 1, userId: 1004, title: "About how to learn something?" },
  { id: 2, userId: 1001, title: "Why JavaScript is Awesome" },
  { id: 3, userId: 1003, title: "My First Day at University" },
  { id: 4, userId: 1005, title: "10 Tips for Productivity" },
  { id: 5, userId: 1002, title: "Understanding CSS Flex-box" },
  { id: 6, userId: 1006, title: "Healthy Food Ideas for Busy People" },
  { id: 7, userId: 1004, title: "React vs Vue: Which One to Learn?" },
  { id: 8, userId: 1001, title: "How to Stay Motivated While Coding" }
];

// ?OUTPUT:
// [
//   { id: 1001, name: "Alice", posts: [{ id: 2, userId: 1001, title: "Why JavaScript is Awesome" }, { id: 8, userId: 1001, title: "How to Stay Motivated While Coding" }] },
//   ...and so on
// ]

const postWithUserID = posts.reduce((acc, post) => {
  if(!acc[post.userId]) {
    acc[post.userId] = [];
  }
  acc[post.userId].push(post);
  return acc;
}, {})

const userWithPosts = users.map(user => {
  return {
    ...user,
    posts: postWithUserID[user.id] || [],
    posts: [...postWithUserID[user.id]],
  }
})

console.log(JSON.stringify(userWithPosts));