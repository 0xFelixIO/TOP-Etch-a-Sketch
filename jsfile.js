/* generates a somewhat random rgb color */
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

/* gets called on div tiles to change their colors to a random color */
function colorSwap(e) {
    this.style.backgroundColor = random_rgba();

}

/* applies event listener to all div tiles on the grid */
function colorListener() {
    let myCells = document.querySelectorAll('.cell');
    for (let i = 0; i < myCells.length; i++) {
        myCells[i].addEventListener('mouseover', colorSwap);
    }
}

/* computes a grid of div tiles based on input box values
   if null or non values are provided, or it is the pages
   first time loading, an alert will appear to input
   valid values, and will generate a default 6x6 grid */
function computeGrid(e) {
    let inputList = document.querySelectorAll('.input');
    let xInput = inputList[0].value;
    let yInput = inputList[1].value;
    if (xInput == '' || yInput == '') {
        alert('Please enter a value for both X and Y.');
        xInput = '6';
        yInput = '6';
    }

    let capsule = document.querySelector('.capsuleDiv');
    capsule.innerHTML = '';

    for (let i = 0; i < yInput; i++) {
        let myRow = document.createElement('div');
        myRow.classList.add('row');
        capsule.appendChild(myRow);
        for (let j = 0; j < xInput; j++) {
            let myCell = document.createElement('div'); 
            myCell.style.textAlign = 'center';
            myCell.classList.add('cell');
            myRow.appendChild(myCell);
        }
    }
    let borderColor = random_rgba();
    capsule.style.border = '4px solid ' + borderColor;
    colorListener();
}

/* on page load we generate a default grid, and apply our
    computeGrid function listener onto our button that
    takes input from the two input boxes */
computeGrid();
const gridButton = document.querySelector('.inputButton');
gridButton.addEventListener('click', computeGrid);