// this is for our input range text
const inputGrid = document.querySelector('#input-grid');
const gridText = document.querySelector('#grid-text');
const gridBox = document.querySelector("#grid-container");
const mainContainer = document.querySelector("#grid-container").parentNode;

let inputValue = () => {
    return inputGrid.value;
}

let change = () => {
    gridText.innerText = "Grid: " + inputValue() + " x " + inputValue();
}
inputGrid.addEventListener('change', change);
// this is for our grid
let cells = () => {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell-custom");
        gridBox.appendChild(cell);
    }
}
cells();


// we need to create a for loop that loops through our inputGrid.value
const responsiveGridBox = document.createElement("div");

let cellNum = () => {
    const responsiveCells = document.createElement('div');
    responsiveCells.classList.add('responsive-cells');
    responsiveGridBox.appendChild(responsiveCells);
    return responsiveCells;
}

let createNewGrid = () => {
    const powerCell = inputValue() * inputValue();

    responsiveGridBox.classList.add("responsive-grid-box");

    responsiveGridBox.style.gridTemplateColumns = `repeat(${inputGrid.value}, 1fr)`;
    responsiveGridBox.style.gridTemplateRows = `repeat(${inputGrid.value}, 1fr)`;

    for (let i = 0; i < powerCell; i++) {
        cellNum();
    }

}

// this lets our cells be responsive 

let addAndRemoveCells = () => {
    if (mainContainer.firstElementChild === gridBox) {
        mainContainer.removeChild(gridBox);
        createNewGrid();
        mainContainer.prepend(responsiveGridBox);
        console.log('working');
    } else if (mainContainer.firstElementChild === responsiveGridBox) {
        responsiveGridBox.innerHTML = '';
        createNewGrid();
        responsiveGridBox.appendChild(responsiveCells);
        console.log('working');
    }
}
inputGrid.addEventListener('input', addAndRemoveCells);




