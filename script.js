let a;
if (a == 10){
    console.log("Верно");  
}
else{
    console.log("Неверно");
}

let min;
if (min>0 && min<=15){
    console.log("Число попадает в первую четверть часа");
}
else if(min>15 && min<=30){
    console.log("Число попадает во вторую четверть часа");
}
else if(min>30 && min<=45){
    console.log("Число попадает в третюю четверть часа");
}
else if(min>45 && min<=59){
    console.log("Число попадает в четвёртую четверть часа");
}
else{
    console.log("Ви ввели не правильное число ");
}

console.log("typeof undefined: ", typeof undefined) // "undefined"

console.log("typeof 0: ", typeof 0) //

console.log("typeof 1n: ", typeof 1n) //

console.log("typeof true: ", typeof true) //

console.log("typeof foo: ", typeof "foo") //

console.log("typeof Symbol(): ", typeof Symbol()) // 

console.log("typeof {}: ", typeof {}) //

console.log("typeof null: ", typeof null) //

console.log("typeof function(){}: ", typeof function(){}) //