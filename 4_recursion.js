// Switch
var job = 'guru';
switch (job) {
    case 'guru':
        console.log('Kerjaannya ngajar.');
    break;
    case 'sopir':
        console.log('Kerjaannya nyetir.');
    break;
    case 'polisi':
        console.log('Kerjaannya nilang.');
    break;
    default:
    console.log('Ada aja kerjaannya.');
}

function power(base, exponent) {
    if (exponent == 0) {
      return 1;
    } 
    else {
      return base * power(base, exponent - 1);
    }
  }
  
console.log(power(2, 3));
// → 8

function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ||
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
console.log(findSolution(24));
  // → (((1 * 3) + 5) * 3)