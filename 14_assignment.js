// 14. Slope is m = (y2-y1)/(x2-x1). 
// Find the slope between point (2, 2) and point(6,10)

function findSlope(x1, y1, x2, y2){
    let m = (y2-y1)/(x2-x1);
    return m;
}

let slope = findSlope(2, 2, 6, 10);

console.log(slope);