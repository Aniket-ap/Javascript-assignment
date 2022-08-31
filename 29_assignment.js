// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumOfEven = 0;
let sumOfOdd = 0;

for(var i = 0; i <= 100; i++ ){
    if(i % 2 == 0){
        sumOfEven += i;
    }else{
        sumOfOdd += i;
    }
}

console.log(`Sum of Even ${sumOfEven} - and -  Sum of Odd ${sumOfOdd}`);