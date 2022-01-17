
//Create Grid function:
createGrid = () => {
for (i = 0; i < 256; i++) {
    let mainDiv = document.querySelector('#container');
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');
    mainDiv.appendChild(gridDiv);

applyHoverColor(gridDiv);    

    }
}

//remove children function:
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//Slider grid resizer events/function:
const gridRanger = document.getElementById('range-set');
const valueDisplay = document.querySelector('.value');
let mainDiv = document.querySelector('#container');

gridRanger.addEventListener('input', () => {
    let valuec = document.getElementById('range-set').value;
    valueDisplay.textContent = valuec;
    removeAllChildNodes(mainDiv);
    mainDiv.setAttribute('style', `grid-template-columns: repeat(${valuec}, 2fr); grid-template-rows: repeat(${valuec}, 2fr);`);
    for (let i = 0; i < valuec*valuec; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black'; 
        })
        mainDiv.appendChild(div); 
    }

});

//Reset button:
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    let val = document.querySelector('.range-control').value;
    let cell = mainDiv.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
})

//Hover function:
function applyHoverColor(gridDiv) {
    gridDiv.onmouseover = () => {
        gridDiv.style.backgroundColor = 'black';
    }
}

createGrid()