const postArray = [
  {
    id: "post-001",
    title: "Bangladesh Wins Historic Match",
    content: "Bangladesh secured a dramatic 3-2 victory in added time.",
    author: "Borhan Uddin",
    likes: 120,
    comments: 15,
    createdAt: "2025-01-12"
  },
  {
    id: "post-002",
    title: "React vs Next.js: Which Should You Learn?",
    content: "In 2025, Next.js is the preferred framework for production apps...",
    author: "John Doe",
    likes: 98,
    comments: 22,
    createdAt: "2025-02-10"
  },
  {
    id: "post-003",
    title: "GSAP ScrollTrigger Tips",
    content: "Here are 10 advanced ScrollTrigger tricks for pro-level animation.",
    author: "Borhan Uddin",
    likes: 310,
    comments: 42,
    createdAt: "2025-03-01"
  },
  {
    id: "post-004",
    title: "JavaScript Array Methods You Must Know",
    content: "map, filter, reduce, find — understanding these makes you a stronger developer.",
    author: "Sarah Ahmed",
    likes: 210,
    comments: 30,
    createdAt: "2025-03-18"
  },
  {
    id: "post-005",
    title: "Why TailwindCSS Saves Development Time",
    content: "Utility-first styling dramatically speeds up UI development in large projects.",
    author: "Michael Stone",
    likes: 175,
    comments: 18,
    createdAt: "2025-04-02"
  },
  {
    id: "post-006",
    title: "Lenis vs Locomotive Scroll",
    content: "Which smooth scroll library is better in 2025? Here’s a complete comparison.",
    author: "Borhan Uddin",
    likes: 260,
    comments: 47,
    createdAt: "2025-04-15"
  },
  {
    id: "post-007",
    title: "Firebase Authentication for Beginners",
    content: "Email/Password, OTP, Google Login — learn how to set up auth step-by-step.",
    author: "Emily Brown",
    likes: 340,
    comments: 55,
    createdAt: "2025-04-28"
  },
  {
    id: "post-008",
    title: "Understanding Asynchronous JavaScript",
    content: "Promises, async/await, event loop — explained with clear examples.",
    author: "John Doe",
    likes: 150,
    comments: 20,
    createdAt: "2025-05-05"
  }
];

const lookUpTable = postArray.reduce((table, post)=>{
  table[post.id] = post;
  return table;
}, {})

// console.log(lookUpTable);


const targetPost = postArray.find(post => post.id === "post-008");
// console.log(targetPost);
console.log(lookUpTable["post-008"])