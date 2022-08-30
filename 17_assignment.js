// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let d = new Date();

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();
let hour = d.getHours();
let minutes = d.getMinutes();

console.log(`${year}-${month+1}-${date}  ${hour}:${minutes}`);
console.log(`${date}-${month+1}-${year}  ${hour}:${minutes}`);
console.log(`${date}/${month+1}/${year}  ${hour}:${minutes}`);