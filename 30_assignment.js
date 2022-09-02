// 30. Write a script which generates a random hexadecimal number.

var letters = "0123456789ABCDEF";
var startHexVal = '#';

for(var i = 0; i < 6; i++){
    startHexVal += letters[(Math.floor(Math.random() * 16))];
}

console.log(startHexVal);