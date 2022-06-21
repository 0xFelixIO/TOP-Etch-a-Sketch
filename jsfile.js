let capsule = document.querySelector('.capsuleDiv');

for (let i = 0; i < 10; i++) {
    let myRow = document.createElement('div');
    myRow.classList.add('row');
    capsule.appendChild(myRow);
    for (let j = 0; j < 10; j++) {
        let myCell = document.createElement('div'); 
        myCell.style.textAlign = 'center';
        myCell.classList.add('cell');
        myRow.appendChild(myCell);
    }
}