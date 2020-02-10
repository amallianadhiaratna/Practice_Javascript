var a = 3.14;
var b = 3;
var c = 123e5;
var d = 123e-5;
var e = 999999999999999;
var g = 0.2 + 0.1;
var h = (0.2 * 10 + 0.1 * 10) / 10;

console.log(typeof(c));
console.log(h)
console.log(3>2)

// operator and && or ||

console.log(true&&false)
console.log(true&&true)

console.log(true||false)
console.log(true||true)

console.log(true ? 1 : 2);
console.log(false ? 1 : 2);

console.log(null || "user")
console.log("mila" || "user")
console.log(NaN || -1)  //bisa untuk return kalau 0, NaN empty string

let one = 1, two = 2;
console.log(one + two);

var name = "mila";
const greeting = "Hello ";
console.log(greeting + name);



let num = 0
while (num<=15) {
    console.log(num);
    num = num+3
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;counter = counter + 1;
}
console.log(result);

for (
    let num_ = 0;
    num_ <= 12;
    num_ = num_+2)
    {
        console.log(num_)
    }

for (let current = 20; ; current = current + 1) {
    if (current % 9 == 0) {
        console.log(current);
        break;
    }
}