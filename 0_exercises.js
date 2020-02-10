function min(a,b) {
    return (Math.min(a,b))
}

console.log(min(0,-10))

function isEven(a) {
    if (a%2 == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isEven(75))
console.log(isEven(50))
console.log(isEven(-2))

z=''
for (i=1;i<5;i++){
    z+='*'
    console.log(z)
}
