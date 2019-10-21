const power = (num, pow) => pow !== 0 ? num * power(num, pow - 1) : 1


console.log(power(10, 3));


const fac = (num) => num <= 0 ? 0 : num === 1 ? 1 : num * fac(num - 1);

console.log(fac(5));

const array = (arr) => {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * array(arr.slice(1));
}

console.log(array([4, 3]));


function recursiveRange(x) {
    if (x === 0) return 0;
    return x + recursiveRange(x - 1);
}


console.log(recursiveRange(4))
