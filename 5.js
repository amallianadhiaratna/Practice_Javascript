let nama = 'Andi';
let usia = 22;
let jomblo = true;
let kerja;


console.log(typeof(nama));
console.log(typeof(usia));
console.log(typeof(jomblo));
console.log(typeof(kerja));
console.log(kerja);

var x = 'Halo Dunia';

console.log(x.length);
console.log(x.indexOf('Dunia'));
console.log(x.indexOf('Halo'));
console.log(x.indexOf('un'));
console.log(x.substr(5, 3));
console.log(x.slice(5, 8));
console.log(x.split(' '));

var x = 'halo';
var y = 'DUNIA';
var z = 12345;

console.log(x.toUpperCase());
console.log(y.toLowerCase());
console.log(x.replace('ha', 'mi'))
console.log(x.replace(/ha/g, 'mi'))
console.log(z.toString())
console.log(typeof(z.toString()))

parseInt('123');
console.log(typeof(parseFloat('123')));
console.log(parseInt('1234.5678'));
parseFloat('1234.5678');
console.log(parseInt('Halo Dunia'));
parseFloat('Halo Dunia');

let a = parseInt('123');
let b = parseFloat('123');
let c = parseInt('1234.5678');
let d = parseFloat('1234.5678');
let e = parseInt('Halo Dunia');
let f = parseFloat('Halo Dunia');


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

console.log(Math.PI);
console.log(Math.abs(-4.7));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));
console.log(Math.cbrt(8));

console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.4));

let v = new Date()
console.log(v.getFullYear())
console.log(v.getMonth())
console.log(v.getDate())
console.log(v.getDay())
console.log(v.getHours())
console.log(v.getMinutes())
console.log(v.getSeconds())
console.log(v.getMilliseconds())