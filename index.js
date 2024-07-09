// Product class to store product properties
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class to store product and its quantity
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of the item
  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class to contain an array of ShoppingCartItem instances
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to get the total of items inside the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to add items to the cart
  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // Method to remove items from the cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to display cart items
  displayCart() {
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.calculateTotalPrice()}`
      );
    });
  }

  // Method to get the total price of the cart
  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + item.calculateTotalPrice(),
      0
    );
  }
}

// Testing the shopping cart system

// Create products
const product1 = new Product(1, "Apple", 0.5);
const product2 = new Product(2, "Banana", 0.3);
const product3 = new Product(3, "Orange", 0.8);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 3); // Add 3 apples
cart.addItem(product2, 2); // Add 2 bananas
cart.addItem(product3, 5); // Add 5 oranges

// Display the cart
console.log("Cart items:");
cart.displayCart();
console.log(`Total items in the cart: ${cart.getTotalItems()}`);
console.log(`Total price of the cart: $${cart.getTotalPrice()}`);

// Remove an item from the cart
cart.removeItem(2); // Remove bananas

// Display the cart again
console.log("\nCart items after removing bananas:");
cart.displayCart();
console.log(`Total items in the cart: ${cart.getTotalItems()}`);
console.log(`Total price of the cart: $${cart.getTotalPrice()}`);
