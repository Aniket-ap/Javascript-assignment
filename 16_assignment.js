// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and 
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Radius of circle");
  
let area = Math.PI * radius * radius;

console.log(area);

document.write(`${area}`);