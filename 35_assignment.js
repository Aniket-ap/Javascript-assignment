// 35. Write a functions which checks if all items are unique in the array.

const isUnique = (arr) => {
    return arr.length === new Set(arr).size;
}

console.log(isUnique(["aniket", "pradhan", "aniket"]));
console.log(isUnique(["aniket", "pradhan"]));
console.log(isUnique([1,2,3,4,5]));
console.log(isUnique([1,2,3,4,5,4,5,3]));