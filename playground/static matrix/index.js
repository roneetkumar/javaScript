let table1 = document.querySelectorAll('#t1 td');
let table2 = document.querySelectorAll('#t2 td');
let res = document.querySelectorAll('#res td');


const getElements = table => {
    const tempTable = []
    table.forEach(element => {
        tempTable.push(element.innerText)
    });
    return tempTable;
}

table1 = getElements(table1);
table2 = getElements(table2);


const add = () => {
    res.forEach((ele, i) => {
        ele.innerText = +table1[i] + +table2[i];
    });
}

const sub = () => {
    res.forEach((ele, i) => {
        ele.innerText = +table1[i] - +table2[i];
    });
}



const mul = () => {
    let arr = [];

    let mul = (s, e) => {
        let sum = [];
        for (let i = 0; i < 3; i++) {
            let mul = [];
            for (let j = s, k = i; j < e; j++ , k = k + 3) {
                mul = [...mul, table1[j] * table2[k]]
            }
            sum = [...sum, mul.reduce((a, c) => a + c)]
        }
        return sum;
    }


    for (let i = 0; i < 9; i = i + 3) {
        arr = [...arr, ...mul(i, i + 3)]
    }

    res.forEach((ele, i) => {
        ele.innerText = arr[i]
    });
}

// res[0].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[1].innerText = (table1[0] * table2[1]) + (table1[1] * table2[4]) + (table1[2] * table2[7])
// res[2].innerText = (table1[0] * table2[2]) + (table1[1] * table2[5]) + (table1[2] * table2[8])
// res[3].innerText = (table1[3] * table2[0]) + (table1[4] * table2[3]) + (table1[5] * table2[6])
// res[4].innerText = (table1[3] * table2[1]) + (table1[4] * table2[4]) + (table1[5] * table2[7])
// res[5].innerText = (table1[3] * table2[2]) + (table1[4] * table2[5]) + (table1[5] * table2[8])
// res[6].innerText = (table1[6] * table2[0]) + (table1[7] * table2[3]) + (table1[8] * table2[6])
// res[7].innerText = (table1[6] * table2[1]) + (table1[7] * table2[4]) + (table1[8] * table2[7])
// res[8].innerText = (table1[6] * table2[2]) + (table1[7] * table2[5]) + (table1[8] * table2[8])


