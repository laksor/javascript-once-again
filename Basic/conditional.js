var phonePrice = 7000;
var budget = 8000;

if (phonePrice > budget){
    console.log('do not buy');
}
else{
    console.log('buy');
}

// multiple condition 

var isGraduate = true;
var salary = 25000;
var car = 1;
// && (and operator)
if(isGraduate == true && salary > 30000 && car >= 1){
    console.log('wedding');
}
// || (or operator)
else if(isGraduate == true || salary > 30000 || car == 1){
    console.log('party');
}
else{
    console.log('no wedding');
}
