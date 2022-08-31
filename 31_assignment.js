// 31. Sort the webTechs array and mernStack array
// // countries Array : https://gist.github.com/incredimike/1469814

const contry = require("./countries");
const webTech = require("./webTechs");

contry.sort();
webTech.sort();

contry.map((con) => console.log(con));
webTech.map((data) => console.log(data));