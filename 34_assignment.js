// 34. Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.

let a = 2;
let b = 4;
let c = 2;

let root1 = 0.0;
let root2 = 0.0;

let discriminant = b * b - 4 * a * c;

if (discriminant < 0) {
  console.log("Roots are imaginary..");
} else if (discriminant == 0) {
  console.log("Roots are equal");

  root1 = -b / (2 * a);
  root2 = -b / (2 * a);
} else if (discriminant > 0) {
  console.log("Roots are unequal");

  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
}

console.log("Roots of the quadratic equation");

console.log(`Root 1 ${root1} `);
console.log(`Root 2 ${root2} `);
