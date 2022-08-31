// 24. Create a separate countries.js file and store the countries array in to this file,
// create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

const countries = require("./countries");
const webTech = require("./webTechs");

countries.map((country) => {
  console.log(country);
});

webTech.map((tech) => {
  console.log(tech);
});
