const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  { name: 'iPhone 14', price: 999, category: 'Electronics', stock: 25 },
  { name: 'Samsung Galaxy S22', price: 899, category: 'Electronics', stock: 30 },
  { name: 'MacBook Pro', price: 1999, category: 'Electronics', stock: 15 },
  { name: 'AirPods Pro', price: 249, category: 'Electronics', stock: 60 },
  { name: 'Washing Machine', price: 700, category: 'Home Appliance', stock: 20 },
  { name: 'Refrigerator', price: 1200, category: 'Home Appliance', stock: 10 },
  { name: 'Blender', price: 80, category: 'Home Appliance', stock: 50 },
  { name: 'Notebook', price: 5, category: 'Stationery', stock: 100 },
  { name: 'Pen', price: 2, category: 'Stationery', stock: 200 },
  { name: 'Office Chair', price: 150, category: 'Furniture', stock: 10 },
  { name: 'Desk', price: 300, category: 'Furniture', stock: 5 },
  { name: 'Smart Watch', price: 350, category: 'Electronics', stock: 40 },
  { name: 'LED TV', price: 1100, category: 'Electronics', stock: 20 },
  { name: 'Sofa', price: 700, category: 'Furniture', stock: 4 },
  { name: 'Dining Table', price: 600, category: 'Furniture', stock: 3 },
  { name: 'Microwave', price: 250, category: 'Home Appliance', stock: 12 },
  { name: 'Treadmill', price: 900, category: 'Fitness', stock: 6 },
  { name: 'Dumbbells', price: 60, category: 'Fitness', stock: 25 },
  { name: 'Yoga Mat', price: 30, category: 'Fitness', stock: 50 },
  { name: 'Printer', price: 200, category: 'Electronics', stock: 18 },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded!');
  process.exit();
};

seed();
