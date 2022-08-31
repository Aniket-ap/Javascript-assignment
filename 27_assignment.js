// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(function(a, b){return a-b});
console.log(ages);
console.log(`Min Age ${ages[0]}`);
console.log(`Max Age ${ages[ages.length - 1]}`);
console.log(`Median Age ${ages[(ages.length / 2) - 1]}`);

let totalAge = 0;
ages.map(age => {
    totalAge += age;    
})

console.log(`Average Age ${totalAge / ages.length}`);
console.log(`Range of Ages ${ages[ages.length - 1] - ages[0]}`);

let compareMin = ages[0] - totalAge;
let compareMax = ages[ages.length - 1] - totalAge;
let compareValue = Math.abs(compareMax - compareMin);
console.log(compareValue);