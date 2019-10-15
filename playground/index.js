function calculate(oper) {
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

    if (oper === '+') {
        res.forEach((ele, i) => {
            ele.innerText = +table1[i] + +table2[i];
        });

    } else if (oper === '-') {
        res.forEach((ele, i) => {
            ele.innerText = +table1[i] - +table2[i];
        });
    }

}


// let table1 = document.querySelectorAll('#t1 td');
// let table2 = document.querySelectorAll('#t2 td');
// let res = document.querySelectorAll('#res td');
// let mul = []

// const getElements = table => {
//     const tempTable = []
//     table.forEach(element => {
//         tempTable.push(element.innerText)
//     });
//     return tempTable;
// }

// table1 = getElements(table1);
// table2 = getElements(table2);

// let newarr = [];

// for (let i = 0, j = 3; i < table2.length; i = i + 3, j = j + 3) {
//     newarr.push(table2.slice(i, j))
// }
// console.log(newarr);


// for (let i = 0, j = 0, k = 0; i < table1.length; i++ , k++) {
//     if (i % 3 == 0) {
//         j++;
//         k = 0;
//     }
//     console.log(`${table1[k]} -> ${newarr[k][j - 1]}`);
// }



// res[0].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[1].innerText = (table1[3] * table2[0]) + (table1[4] * table2[3]) + (table1[5] * table2[6])
// res[2].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[3].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[4].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[5].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[6].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[7].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])
// res[8].innerText = (table1[0] * table2[0]) + (table1[1] * table2[3]) + (table1[2] * table2[6])

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//     }
//     console.log("\n");
// }


