let _ = el => document.querySelector(el);
let __ = el => document.querySelectorAll(el);

function createMatrix(matrix) {

    col = _(matrix + ' .col').value;
    row = _(matrix + ' .row').value;

    for (let i = 1; i <= row; i++) {
        _(matrix + ' tbody').innerHTML += `<tr class="r${i}"></tr>`;
    }
    for (let j = 1; j <= col; j++) {
        __(matrix + ' tr').forEach(ele => {
            ele.innerHTML += `<td class="c${j}"><input type="text" maxlength="1"></td>`;
        })
    }
    // console.log(matrix + " button");

    _(matrix + ' button').onclick = () => {
        let matrixValue = __(matrix + ' tr');
        // console.clear();
        for (let i = 0; i < matrixValue.length; i++) {
            let row = matrixValue[i].querySelectorAll('td');
            for (let j = 0; j < row.length; j++) {
                let col = [];
                col[[i, j]] = row[j].innerText;
                console.log(col);
            }
        }
    }
}

createMatrix('.matrix1');
createMatrix('.matrix2');

__('.matrix1 input').forEach(ele => {
    ele.oninput = () => {
        _('.matrix1 tbody').innerHTML = ``;
        createMatrix('.matrix1');

    }
});

__('.matrix2 input').forEach(ele => {
    ele.oninput = () => {
        _('.matrix2 tbody').innerHTML = ``;
        createMatrix('.matrix2');
    }
});






