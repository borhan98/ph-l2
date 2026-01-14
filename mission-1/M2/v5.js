// TODO: calculate subtotal
// Expected Output: will be a number (Price)
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1200, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 450, quantity: 3 },
  { id: "p-003", name: "Aarong Kurta", price: 3000, quantity: 2 },
  { id: "p-004", name: "Logiteck Wireless Mouse", price: 5000, quantity: 1 },
];

const subTotal = cartItems.reduce((acc, product) => {
  acc += (product.price * product.quantity);
  return acc;
}, 0)
// console.log(subTotal);


// TODO: Find the top scorer
const players = [
  { id: "p-0001", name: "Jamal Bhuyan", score: 1 },
  { id: "p-0101", name: "Kazi Salahuddin", score: 8 },
  { id: "p-0102", name: "Zahid Hasan Ameli", score: 15 },
  { id: "p-0011", name: "Topu Barman", score: 5 },
  { id: "p-0104", name: "Enayetur Rahman Khan", score: 2 },
  { id: "p-0105", name: "Enamul Haque", score: 7 },
  { id: "p-0103", name: "Sheikh Mohammad Aslam", score: 10 },
  { id: "p-0025", name: "Mohammad Ibrahim", score: 4 },
  { id: "p-0024", name: "Sumon Reza", score: 1 },
  { id: "p-0017", name: "Sheikh Morsalin", score: 6 },
  { id: "p-0018", name: "Hamza Choudhury", score: 4 },
];

const topScorer = players.reduce((bestScorer, player) => {
  return bestScorer.score > player.score ? bestScorer : player;
}, { id: "p-0001", name: "Jamal Bhuyan", score: 1 })
console.log(topScorer);

// TODO: sort as descending players by score
const descByScore = players.sort((a, b) => b.score - a.score);
console.log(descByScore);