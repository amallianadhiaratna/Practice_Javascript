// ARRAY ARRRAY
// JOIN
let mobil = [ ' Alya ' , ' Xenia ' , ' Avanza ' ];
console.log(mobil)
console.log(mobil.toString())
console.log(mobil.join(' * '))

// INDEX
let mob = [ ' Alya ' , ' Xenia ' , ' Avanza ' ];
console.log(mob[0])
console.log(mob[1])

// LENGTH, list
let buah, bPjg, i;
buah = ['Jeruk', 'Nanas', 'Apel'];
bPjg = buah.length;
for (i = 0; i < bPjg; i++) {
    console.log(buah[i]);
}

// INDEXOF, SORT, REVERSE
let mobi = ['Alya','Xenia','Avanza'];
let w = mobi.length;
// let x = mobi.sort();
let y = mobi.reverse();
let z = mobi.indexOf('Avanza')
console.log(w)
// console.log(x)
console.log(y)
console.log(z)

// POP, PUSH, SHIFT, UNSHIFT, SPLICE, DELETE, SLICE
let bua = ['Jeruk','Nanas','Apel'];
bua.pop();
console.log(bua)
bua.push('Kiwi');
console.log(bua)
bua.shift();
console.log(bua);
bua.unshift('lemon');
console.log(bua)

bua.splice(2,0,'Jeruk', 'Apel')
console.log(bua);
bua.splice(0,1)
console.log(bua);
delete bua[0];
console.log(bua);

let buah1 = ['Banana', 'Orange',
'Lemon', 'Apple', 'Mango'];
let buah2 = buah1.slice(1);
console.log(buah2)
let buah4 = buah1.slice(1,4);
console.log(buah4)
buah1[6] = 'Mangga';
console.log(buah1)

// CONCAT
let nama1 = ['Andi','Budi'];
let nama2 = ['Caca','Dede','Euis'];
let nama3 = nama1.concat(nama2);
let nama4 = nama2.concat(nama1);
console.log(nama3)
console.log(nama4)

let nama5 = ['Faza','Gilang'];
let x = nama1.concat(nama2,nama5);
console.log(nama1)
console.log(nama2)
console.log(nama5)
console.log(x)

// OBJECT OBJECT
// object literal
var Andi = {
    namaDpn: "Andi",
    namaBlkg: "Susilo",
    usia: 50,
    pekerjaan: "Politisi"
    };
console.log(Andi)

// keyword new Object
var Andi = new Object;

Andi.namaDpn = 'Andi'
Andi.namablkg = 'Karno'
Andi.usia = 50
Andi.pekerjaan = 'Pegawai'
console.log(Andi)

// Object Builder
function orang(nama, usia, job) {
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
    }
var Andi = new orang('Andi', 30, 'PNS');
console.log(Andi.umur)

// class
class orang2 {
    constructor(nama, usia, job) {
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
    };
};
var Andi = new orang2('Andi', 30, 'PNS');
console.log(Andi.umur)

let anObject = {left: 1, right: 2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);

console.log("right" in anObject);
console.log(Object.keys({x: 0, y: 0, z: 2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
    
  ];
console.log(journal[0].events[1])

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score_ = {visitors: 0, home: 0};
score_.visitors = 1;
// score_ = {visitors: 1, home: 1};
console.log(score_)

//Property OBJ
function orang(awal, akhir, usia) {
    this.nama = {awal, akhir};
    this.usia = usia;
    }
var Andi = new orang ('Andi','Susilo',20);
console.log(Andi)
console.log(Andi.nama.awal)
console.log(Andi.nama.akhir)

// Accessing Obj Method
var orang = {
    namaDpn : "Andi",
    namaBlk : "Susilo",
    usia : 50,
    namaFull : function() {
        return this.namaDpn + " " +this.namaBlk;
    }
};
console.log(orang.namaFull)
console.log(orang.namaFull())

function person(x, y, z) {
    this.namaDpn = x,
    this.namaBlk = y,
    this.usia = z,
    this.gantiNama = function(a) {
    this.namaBlk = a
    }
}
let Andi_ = new person("Andi","Susilo",24)
console.log(Andi_.namaBlk)
Andi_.gantiNama("Darmawan")
console.log(Andi_.namaBlk)

var manusia = {
    kepala: 1,
    mata: 2,
    telinga: 2,
    tangan: 2,
    kaki: 2,
};

var namaProp;
for (namaProp in manusia) {
    console.log(namaProp + ":" +manusia[namaProp]);
}
console.log(namaProp)

function orang1(nama,lahir,job){
    this.nama=nama;
    this.lahir=lahir;
    this.job = job;
}

orang1.prototype.marga = 'Hasibuan'
orang1.prototype.usia = function(){
    return 2020-this.lahir
}
var budi = new orang1('Budi', 1997, 'student')
console.log(budi)
console.log(budi.usia())

function orang3(nama, usia, job) {
    this.namaDpn = nama;
    this.usia = usia;
    this.pekerjaan = job;
}
function atlit(nama, usia, job, cab, pres){
    orang3.call(this, nama, usia, job)
    this.cabor = cab;
    this.prestasi = pres;
}
var Andi = new atlit();
console.log(Andi)

function pizza() {
    this.diameter = 30
}
function pizzaKeju(){
    pizza.call(this);
    this.topping = 'Keju';
    this.harga = 50
}
var satu = new pizzaKeju
console.log(satu)