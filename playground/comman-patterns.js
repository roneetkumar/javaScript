// frequency counter
function fcounter(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    let fre1 = {};
    let fre2 = {};

    for (const i of arr1) {
        fre1[i] = (fre1[i] || 0) + 1;
    }

    for (const i of arr2) {
        fre2[i] = (fre2[i] || 0) + 1;
    }

    for (const key in fre1) {
        if (!(key ** 2) in fre2) {
            return false;
        }
        if (fre1[key] !== fre2[key ** 2]) {
            return false;
        }
    }
    return true
}

// console.log(fcounter([2, 3, 2, 3, 5], [4, 25, 9, 9, 4]));

// anagram

function ana(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }
    let fcount1 = {};
    for (const val of str1) {
        fcount1[val] ? fcount1[val] += 1 : fcount1[val] = 1;
    }

    for (const val of str2) {
        if (!fcount1[val]) {
            return false;
        } else {
            fcount1[val] -= 1;
        }
    }
    return true
}

// console.log(ana('roop', 'poor'));

let nums = [-1, 6, 8, 3, -2, 8, 2, 0, 3, 4, 6]


const sumZero = nums => {
    nums.sort((a, b) => a - b)

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === 0) {
            return [nums[left], nums[right]];
        } else if (sum < right) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(sumZero(nums));


const fac = num => num !== 1 ? num * fac(num - 1) : 1;


// console.log(fac(5));



const collectOddEven = (arr) => {

    let odds = [];
    let evens = [];

    const collector = (arr) => {

        if (arr.length === 0) {
            return;
        }
        if (arr[0] % 2 === 0) {
            evens.push(arr[0]);
        } else {
            odds.push(arr[0]);
        }
        collector(arr.slice(1));
    }
    collector(arr);
    return { odds, evens }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr = collectOddEven(arr);
// console.log(arr);


// input - array to search from / value to search.

// output - the index of search item / -1 if num is not in array.

//  check every value to find the index in array
//  if value is not found return -1

let usernames = [56, 33, 77, 12, 34, 55, 99, 54, 21, 45]

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

// console.log(linearSearch(usernames, 34));



// input - array to search from / value to search.

// output - the index of search item / -1 if num is not in array.


// create two varible left for index 0 and right for index n-1
//  find the middle element, if find the value return index

function binarySearch(arr, val) {

    arr.sort((a, b) => a - b);
    console.log(arr, val);

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)

    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}

// console.log(binarySearch(usernames, 55));

function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j]);
            if (short[j] !== long[i + j]) {
                console.log('break');

                break;
            }
            if (j == short.length - 1) {
                console.log('found');
                count++;
            }
        }
    }
    return count
}

// naiveSearch('lorie loled', 'lol')

const bubble = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubble([22, 44, 1, 96, 333, 77, 4, 2, 9]));

const swap = (arr, left, right) => [arr[left], arr[right]] = [arr[right], arr[left]];

const bubbleFixed = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

// console.log(bubbleFixed([1, 3, 5, 6, 4, 7]));


const selectionSort = (arr) => {
    for (let min = i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (i !== min) swap(arr, i, min)
    }
    return arr
}

// console.log(selectionSort([22, 44, 1, 96, 333, 77, 4, 2, 9]));

const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > curr; j--) {
            if (arr[j] > curr) arr[j + 1] = arr[j];
        }
        arr[j + 1] = curr;
    }
    return arr;
}

// console.log(insertionSort([22, 44, 1, 96, 333, 77, 4, 2, 9]));

const mergeSort = (arr) => {

    return arr;
}

console.log(mergeSort([22, 44, 1, 96, 333, 77, 4, 2, 9]));
