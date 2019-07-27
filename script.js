console.log("I am Learning");

document.getElementById("head3").innerHTML="Belajar JAVAScript";

var name="dypurnama";
console.log(name);

var lastName="Bumi";
console.log(lastName);
//cara Lama ES 5
var fullName=name +" " + lastName;
console.log(fullName);
console .log(name + " " + lastName);

//cara baru ES 6
console.log (`My Name is ${fullName}`);

//operator penambahan
var x=7
var y=5
console.log(x+y);
var z = x+y;
console .log(z);

//operator perkalian
console.log(x*y);

// increment
var d= 10;
d+=10;
console.log(d)

// Decrement
var d =10;
d-=5;
console.log(d);

//modulo

var d = 10;
d%=4;
console.log(d);


var tnamadepan ="Ledy Purnama";
var tnamabelakang ="Ashar";
var tnamalengkap=tnamadepan +" "+ tnamabelakang;
console.log(tnamalengkap);

//equal value
var d = 10;
var e = 10;
console.log(d==e);

//not equal
var d = 10;
var e = 5;
console.log(d!=e);

//equal value * type
var d = 10;
console.log(d=="10");

/**
 * ++ increment = penambahan
 * -- decrement = pengurangan
 * % modulo = sisa bagi
 * == equal value = nilai sama
 * === equal value * type = nilai sama dan typenya
 * != not equal = tidak sama
 * !== not equal value * type
 */