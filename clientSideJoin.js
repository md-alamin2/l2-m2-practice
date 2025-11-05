//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

// TODO initial an empty object of postByUserId
// TODO check if any post exist in the object
// TODO if didn't exist then initial an array of post data
// TODO if exist then push the post data in the array
// TODO then map the user array
// TODO spared the user and add the post by user's Id

const postByUerId = posts.reduce((table, post) => {
  const { userId } = post;
  if (!table[userId]) {
    table[userId] = [];
  }

  table[userId].push(post);

  return table;
}, {});

const userWithPost = users.map((user) => {
  return {
    ...user,
    posts: postByUerId[user.id] || [],
  };
});

console.log(JSON.stringify(userWithPost));

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]
