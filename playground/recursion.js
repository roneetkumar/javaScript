const power = (num, pow) => pow !== 0 ? num * power(num, pow - 1) : 1
const fac = num => num <= 0 ? 0 : num !== 1 ? num * fac(num - 1) : 1;
const arrMul = arr => arr.length !== 0 ? arr[0] * arrMul(arr.slice(1)) : 1;
const sumNums = x => x !== 0 ? x + sumNums(x - 1) : 0;
const nums = num => num > 1 ? nums(num - 1) : console.log(num);
const revNums = num => num > 1 ? console.log(num) : revNums(num - 1);


// console.log(power(10, 3));
// console.log(fac(5));
// console.log(arrMul([4, 3, 2]));
// console.log(sumNums(10))
// nums(10)
revNums(10)
