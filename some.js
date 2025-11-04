// ? Array some() method

const arr = [1, 2, 3, 4, 5];

const hasEvenNumber = arr.some((num) => !num % 2 === 0);

// console.log(hasEvenNumber)

const currentUserRoles = ["user", "editor"];

const featureAccessRoles = ["admin", "manager"];

const hasAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
);

// console.log(hasAccess)

// ? Array from() method

// const arr2 = Array.from([1, 2, 3, 4, 5], (num, i) => num * i);

// console.log(arr2);

const range = (start, stop, step)=>{
  return Array.from({length: Math.ceil((stop - start)/step)}, (_, i)=> start + i * step);
}

console.log(range(1, 11, 1))


