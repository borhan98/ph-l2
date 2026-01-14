const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 2 },
  { category: "Electronics", item: "Smartphone", price: 800, quantity: 5 },
  { category: "Electronics", item: "Headphones", price: 150, quantity: 8 },
  { category: "Furniture", item: "Office Chair", price: 250, quantity: 3 },
  { category: "Furniture", item: "Dining Table", price: 600, quantity: 1 },
  { category: "Clothing", item: "T-Shirt", price: 25, quantity: 12 },
  { category: "Clothing", item: "Jeans", price: 40, quantity: 6 },
  { category: "Groceries", item: "Rice (5kg)", price: 8, quantity: 20 },
  { category: "Groceries", item: "Olive Oil (1L)", price: 10, quantity: 10 },
  { category: "Sports", item: "Football", price: 30, quantity: 4 },
  { category: "Sports", item: "Treadmill", price: 700, quantity: 1 },
  { category: "Beauty", item: "Perfume", price: 55, quantity: 7 },
  { category: "Beauty", item: "Face Cream", price: 18, quantity: 9 }
];


const revenue = sales.reduce((acc, sale) => {
  if (!acc[sale.category]) {
    acc[sale.category] = {
      totalRevenue: 0,
      itemCount: 0
    }
  }

  acc[sale.category].totalRevenue += sale.price * sale.quantity;
  acc[sale.category].itemCount += sale.quantity;
  return acc;
}, {})

console.log(revenue);


// ? OUTPUT:
// {
//   Electronics: {
//     totalRevenue: 7600;
//     itemCount: 15;
//   };
//   Furniture: {
//     totalRevenue: 1350;
//     itemCount: 4;
//   }
//   ... and so on
// }