let _ = el => document.querySelector(el);
let __ = el => document.querySelectorAll(el);

let matrixValues1;
let matrixValues2;

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

    _('button').onclick = () => {
        let matrix1 = __('.matrix1 tr');
        let matrix2 = __('.matrix2 tr');
        matrixValues1 = [];
        matrixValues2 = [];
        for (let i = 0; i < matrix1.length; i++) {
            let row = matrix1[i].querySelectorAll('td');
            for (let j = 0; j < row.length; j++) {
                matrixValues1[[i, j]] = row[j].querySelector('input').value;

            }
        }
        for (let i = 0; i < matrix2.length; i++) {
            let row = matrix2[i].querySelectorAll('td');
            for (let j = 0; j < row.length; j++) {
                matrixValues2[[i, j]] = row[j].querySelector('input').value;
            }
        }
        // addMatrix(matrixValues1, matrixValues2);
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








