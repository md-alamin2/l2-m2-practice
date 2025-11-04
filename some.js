// ? Array some() method

const arr = [1, 2, 3, 4, 5];

const hasEvenNumber = arr.some((num)=> !num % 2 === 0);

// console.log(hasEvenNumber)

const currentUserRoles = ["user", "editor"];

const featureAccessRoles = ["admin", "manager"];

const hasAccess = currentUserRoles.some(role => featureAccessRoles.includes(role))

// console.log(hasAccess)


// ? Array from() method


