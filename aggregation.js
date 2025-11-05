//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

// TODO: initiate empty object
// TODO: check if the response already exist or not
// TODO: if exist then increment count
// TODO: if not exist then initialize with count 1

const count = surveyResponses.reduce((table, response) => {
    if (table[response]) {
      table[response] = table[response] + 1;
    } else {
      table[response] = 1;
    }

  //   one liner of the above code
  //   table[response] = (table[response] || 0) + 1;
  //   table[response]
  //     ? (table[response] = table[response] + 1)
  //     : (table[response] = 1);

  return table;
}, {});

// console.log(count);

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

// TODO initial an empty object
// TODO initial an object of category
// TODO calculate the revenue

const salesTable = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;
  return table
}, {});
console.log(salesTable)

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };
