// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(n){
    if(n < 2){
        return true;
    }
    let sqrt = Math.sqrt(n);
    for(let i = 2; i <= sqrt; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

for(var i = 1; i <= 100; i++){
    if(isPrime(i)){
        console.log(i);
    }
}