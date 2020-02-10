const square = function(x) {
    return x * x;
};

console.log(square(12));

const funstring = function() {
    console.log("Tess!");
};
  
funstring();

  
const power = function(base, exponent) {
let result = 1;
for (let count = 0; count < exponent; count++) {
    result *= base;
    console.log(result)
}
return result;
};
  
console.log(power(2, 10));


let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
// var bisa global, let dan const lokal jk didlm if for 
console.log(x + z);

const fun = function(n) {
    return n / 2;
};
// n di function itu bkn global
let n = 10;
console.log(fun(100));
console.log(n);

const fun2 = function (factor){
    const fun3 = function(jumlah, unit, nama){
        let jumlah_bahan = jumlah*factor;
        if (jumlah_bahan>1) {
            unit +="s";
        };
        console.log(`${jumlah_bahan} ${unit} ${nama}` )
    };
    fun3(1,'can', 'peas');
    fun3(0.25, 'cup', 'water');
    fun3(2, "tablespoon", "olive oil")
};


console.log(fun2(2))

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

const power_ = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

console.log(power_(2,10))

function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");

function power_1(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power_1(4));
// → 16
console.log(power_1(2, 6));
// → 64