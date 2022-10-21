let a = +prompt("Введите любое число(лучше 10)");
if (a == 10){
    alert("Верно");  
}
else{
    alert("Неверно");
}

let min = +prompt('Введите число от 0 до 59');
if (min>=0 && min<=14){
    alert("Число попадает в первую четверть часа");
}
else if(min>=15 && min<=29){
    alert("Число попадает во вторую четверть часа");
}
else if(min>=30 && min<=44){
    alert("Число попадает в третюю четверть часа");
}
else if(min>=45 && min<=59){
    alert("Число попадает в четвёртую четверть часа");
}
else{
    alert("Ви ввели не правильное число ");
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