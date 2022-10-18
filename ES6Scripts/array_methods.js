let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

function getItemName(item) {
  return item.item;
}
function displayName(itemName) {
    console.log(itemName);
}

let itemNames = cart.map(getItemName).sort();

itemNames.forEach(displayName);
// sum cart
function getTotalCost(currentTotal, arrayElement) {
  return currentTotal + arrayElement.price * arrayElement.quantity;
}

let total = cart.reduce(getTotalCost, 0);
console.log(total);
