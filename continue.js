// continue
var numbers = [20, 25, 55, 66, 77, 4];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}