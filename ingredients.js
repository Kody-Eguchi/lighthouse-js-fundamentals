const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n");

// Write a for loop that prints out the contents of ingredients:
for (let n = 0; n < ingredients.length; n++) {
  console.log(ingredients[n]);
}
console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let r = ingredients.length - 1; r >= 0; r--) {
  console.log(ingredients[r]);
}
