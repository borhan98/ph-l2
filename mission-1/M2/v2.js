const products = [
  {
    id: "B001",
    category: "Book",
    name: "Atomic Habits",
    author: "James Clear",
    brand: "Penguin",
    price: 14.99,
    rating: 4.8,
    description: "A practical guide to building good habits and breaking bad ones.",
    image: "https://via.placeholder.com/300x400?text=Atomic+Habits"
  },
  {
    id: "B002",
    category: "Book",
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    brand: "HarperOne",
    price: 12.5,
    rating: 4.6,
    description: "A self-help book challenging traditional positivity ideas.",
    image: "https://via.placeholder.com/300x400?text=Subtle+Art"
  },
  {
    id: "B003",
    category: "Book",
    name: "Deep Work",
    author: "Cal Newport",
    brand: "Grand Central Publishing",
    price: 16.75,
    rating: 4.7,
    description: "Explores focused success in a distracted world.",
    image: "https://via.placeholder.com/300x400?text=Deep+Work"
  },
  {
    id: "B004",
    category: "Book",
    name: "The Alchemist",
    author: "Paulo Coelho",
    brand: "HarperTorch",
    price: 10.99,
    rating: 4.5,
    description: "A novel about following your dreams and destiny.",
    image: "https://via.placeholder.com/300x400?text=The+Alchemist"
  },
  {
    id: "E001",
    category: "Electronics",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999,
    rating: 4.9,
    description: "The latest iPhone with A17 Pro chip and titanium design.",
    image: "https://via.placeholder.com/400x400?text=iPhone+15+Pro"
  },
  {
    id: "E002",
    category: "Electronics",
    name: "MacBook Air M3",
    brand: "Apple",
    price: 1299,
    rating: 4.8,
    description: "Ultra-thin laptop with M3 chip and Liquid Retina display.",
    image: "https://via.placeholder.com/400x400?text=MacBook+Air+M3"
  },
  {
    id: "E003",
    category: "Electronics",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1199,
    rating: 4.7,
    description: "AI-powered Android flagship with a 200MP camera.",
    image: "https://via.placeholder.com/400x400?text=Galaxy+S24+Ultra"
  },
  {
    id: "E004",
    category: "Electronics",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 399,
    rating: 4.8,
    description: "Industry-leading noise-cancelling wireless headphones.",
    image: "https://via.placeholder.com/400x400?text=Sony+WH-1000XM5"
  },
  {
    id: "C001",
    category: "Clothing",
    name: "Classic White T-Shirt",
    brand: "H&M",
    price: 12,
    rating: 4.5,
    type: "Men",
    description: "100% cotton regular fit crew neck tee.",
    image: "https://via.placeholder.com/300x400?text=White+T-Shirt"
  },
  {
    id: "C002",
    category: "Clothing",
    name: "Denim Jacket",
    brand: "Levi’s",
    price: 59.99,
    rating: 4.7,
    type: "Unisex",
    description: "Timeless blue denim jacket with button closure.",
    image: "https://via.placeholder.com/300x400?text=Denim+Jacket"
  },
  {
    id: "C003",
    category: "Clothing",
    name: "Floral Summer Dress",
    brand: "Zara",
    price: 45,
    rating: 4.6,
    type: "Women",
    description: "Lightweight floral dress perfect for summer.",
    image: "https://via.placeholder.com/300x400?text=Floral+Dress"
  },
  {
    id: "C004",
    category: "Clothing",
    name: "Hoodie",
    brand: "Nike",
    price: 49.99,
    rating: 4.8,
    type: "Unisex",
    description: "Soft fleece hoodie with front pocket and logo print.",
    image: "https://via.placeholder.com/300x400?text=Nike+Hoodie"
  },
  {
    id: "S001",
    category: "Shoes",
    name: "Air Jordan 1 Retro",
    brand: "Nike",
    price: 180,
    rating: 4.9,
    type: "Sneakers",
    description: "Classic basketball-inspired sneakers in red and black.",
    image: "https://via.placeholder.com/300x300?text=Air+Jordan+1"
  },
  {
    id: "S002",
    category: "Shoes",
    name: "Ultraboost 23",
    brand: "Adidas",
    price: 160,
    rating: 4.8,
    type: "Running",
    description: "Energy-return running shoes with knitted upper.",
    image: "https://via.placeholder.com/300x300?text=Ultraboost+23"
  },
  {
    id: "S003",
    category: "Shoes",
    name: "Classic Leather",
    brand: "Reebok",
    price: 85,
    rating: 4.6,
    type: "Casual",
    description: "Retro-style white sneakers with durable sole.",
    image: "https://via.placeholder.com/300x300?text=Reebok+Classic"
  },
  {
    id: "S004",
    category: "Shoes",
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 70,
    rating: 4.7,
    type: "Casual",
    description: "Iconic canvas shoes with rubber toe cap.",
    image: "https://via.placeholder.com/300x300?text=Converse+Chuck+Taylor"
  }
];


/**
 * ? output: [{productName: "Classic Leather"}, {productName: "Ultraboost 23"}]
 * 
 * 1. Filter categories
 * 2. sort by rating (descending)
 * 3. slice top/first 2
 * 4. map and return only name as productName
*/

const topThreeShoes = products
  .filter(product => product.category === "Shoes")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 2)
  .map(product => {
    return { productName: product.name };
  });

console.log(topThreeShoes);
