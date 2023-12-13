// this is were we keep our querySelectors
const inputGrid = document.querySelector('#input-grid');
const gridText = document.querySelector('#grid-text');
const gridBox = document.querySelector("#grid-container");
const mainContainer = document.querySelector("#grid-container").parentNode;
const customColor = document.querySelector("#custom-color");
const responsiveGridBox = document.createElement("div");
const btnBlack = document.querySelector("#btn-black");
const btnWarm = document.querySelector("#btn-warm");
const btnCold = document.querySelector("#btn-cold");
const btnClear = document.querySelector("#btn-clear");

// our input value and text
const inputValue = () => {
    return inputGrid.value;
}

const change = () => {
    gridText.innerText = "Grid: " + inputValue() + " x " + inputValue();
}

// this is our color list for a random color
const warmColors = ['#cb997e', '#ddbea9', '#ffe8d6', '#c38e70', '#ede0d4'];
const coldColors = ['#03045e', '#0077b6', '#3a0ca3', '#012a4a', '#2d00f7'];

// this is for our grid that loads up in the browser
const cells = () => {
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell-custom");
        gridBox.appendChild(cell);
        cell.addEventListener("mouseover", colorMouse = () => {
            cell.style.backgroundColor = customColorValue();
        });
        btnBlack.addEventListener('click', function () {
            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = 'black';
            })
        });
        btnWarm.addEventListener('click', function () {
            cell.addEventListener('mouseover', function () {
                randomColorFirst = warmColors[Math.floor(Math.random() * warmColors.length)];
                cell.style.backgroundColor = randomColorFirst;
            })
        });
        btnCold.addEventListener('click', function () {
            cell.addEventListener('mouseover', function () {
                randomColorSecond = coldColors[Math.floor(Math.random() * warmColors.length)];
                cell.style.backgroundColor = randomColorSecond;
            })
        });
        btnClear.addEventListener('click', function () {
            cell.style = '';
        })

    }
}
cells();



//this is our responsive cells that listens to our input value and changes
const cellNum = () => {
    const responsiveCells = document.createElement('div');

    responsiveCells.classList.add('responsive-cells');
    responsiveGridBox.appendChild(responsiveCells);

    responsiveCells.addEventListener("mouseover", colorMouse = () => {
        responsiveCells.style.backgroundColor = customColorValue();
    });
    btnBlack.addEventListener('click', function () {
        responsiveCells.addEventListener('mouseover', function () {
            responsiveCells.style.backgroundColor = 'black';
        })
    });
    btnWarm.addEventListener('click', function () {
        responsiveCells.addEventListener('mouseover', function () {
            randomColorFirst = warmColors[Math.floor(Math.random() * warmColors.length)];
            responsiveCells.style.backgroundColor = randomColorFirst;
        })
    });
    btnCold.addEventListener('click', function () {
        responsiveCells.addEventListener('mouseover', function () {
            randomColorSecond = coldColors[Math.floor(Math.random() * warmColors.length)];
            responsiveCells.style.backgroundColor = randomColorSecond;
        })
    });
    btnClear.addEventListener('click', function () {
        responsiveCells.style = '';
    })

    return responsiveCells;
}

// This creates responsive cells
const createNewGrid = () => {
    const powerCell = inputValue() * inputValue();

    responsiveGridBox.classList.add("responsive-grid-box");

    responsiveGridBox.style.gridTemplateColumns = `repeat(${inputGrid.value}, 1fr)`;
    responsiveGridBox.style.gridTemplateRows = `repeat(${inputGrid.value}, 1fr)`;
    

    for (let i = 0; i < powerCell; i++) {
        cellNum();
    }

}

// this lets our cells be responsive 
function addAndRemoveCells() {
    if (mainContainer.firstElementChild === gridBox) {
        mainContainer.removeChild(gridBox);
        createNewGrid();
        mainContainer.prepend(responsiveGridBox);
    } else if (mainContainer.firstElementChild === responsiveGridBox) {
        responsiveGridBox.innerHTML = '';
        createNewGrid();
        responsiveGridBox.appendChild(responsiveCells);
    }
}


// now lets create the colors for our color input
customColorValue = () => {
    return customColor.value;
}

//this is all of our event listeners
inputGrid.addEventListener('change', change);
inputGrid.addEventListener('input', addAndRemoveCells);
customColor.addEventListener('input', customColorValue);
