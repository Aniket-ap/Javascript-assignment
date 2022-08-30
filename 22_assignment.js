// 22. Write a program which tells the number of days in a month.

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

let getMonth = prompt("Enter Month");
// let getMonth = "july";
let month = getMonth.toLowerCase();
let keyMonth = -1;
switch (month) {
  case "january":
    keyMonth = 1;
    break;
  case "february":
    keyMonth = 2;
    break;
  case "march":
    keyMonth = 3;
    break;
  case "april":
    keyMonth = 4;
    break;
  case "may":
    keyMonth = 5;
    break;
  case "june":
    keyMonth = 6;
    break;
  case "july":
    keyMonth = 7;
    break;
  case "august":
    keyMonth = 8;
    break;
  case "september":
    keyMonth = 9;
    break;
  case "october":
    keyMonth = 10;
    break;
  case "november":
    keyMonth = 11;
    break;
  case "december":
    keyMonth = 12;
    break;
  default:
    console.log("Enter right MONTH");
}
let d = new Date();

let ans = getDaysInMonth(d.getFullYear(), keyMonth);

console.log(ans);
