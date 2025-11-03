// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

// Sort numbers in ascending order
const ascendingNumbers = numbers.sort((a, b) => a - b);

// Sort numbers in descending order
const descendingNumbers = numbers.sort((a, b) => b - a);

// Sort fruits alphabetically (case-insensitive)
const sortedFruits = fruits.sort((a, b)=> a.localeCompare(b));

// console.log(sortedFruits)

// Nested array flat

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8,[9, 10, [11, [12, 13]]]]];

const flattenedArray = nestedArray.flat(Infinity);
// console.log(flattenedArray)

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const flattenedTags = [...new Set(tagsFromPosts.flat())];
console.log(flattenedTags);