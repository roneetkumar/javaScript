let a = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

let b = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

let c = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

matrix(a, b, c);

function matrix(a, b, c) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            for (let k = 0; k < c.length; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
}

console.log(c);
