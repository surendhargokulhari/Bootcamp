
const product = {
    name: "Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    inStock: true
  };
  
  const { name, price, category, inStock } = product;
  

  console.log("Destructured Values:");
  console.log("Name:", name);
  console.log("Price:", price);
  console.log("Category:", category);
  console.log("In Stock:", inStock);
  

  function formatProductDetails({ name, price, category, inStock }) {
    return `Product: ${name}\nCategory: ${category}\nPrice: $${price}\nAvailable: ${inStock ? "Yes" : "No"}`;
  }
  
  const result = formatProductDetails(product);
  console.log("\nFormatted Product Details:\n" + result);
  