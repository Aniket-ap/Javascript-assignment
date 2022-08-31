// 23. Write a program which tells the number of days in a month, now consider leap year.

function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// const year = prompt('Enter  year:');
const year = 2000;

checkLeapYear(year);