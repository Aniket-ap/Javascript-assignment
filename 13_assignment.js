// 13. Write a script that prompt the user to enter base and height 
// of the triangle and calculate an area of a triangle 
// (area = 0.5 x b x h).

let base = prompt("Base");
let height = prompt("Height");
  
let area = 0.5 * base * height;

console.log(area);

document.write(`${area}`);