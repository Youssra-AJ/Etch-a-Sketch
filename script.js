
for (i = 0; i < 256; i++) {
    const mainDiv = document.querySelector('#container');

    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');
    gridDiv.style.height = '30px';
    gridDiv.style.width = '30px';
    gridDiv.style.display = 'flex';
    mainDiv.appendChild(gridDiv);

applyHoverColor(gridDiv);    

}

let gridDiv = document.querySelectorAll('.grid-div')

document.getElementById('reset').addEventListener('click', () => {
    gridDiv.forEach(gridDiv => {
        gridDiv.style.backgroundColor = 'white';
    });
})

function applyHoverColor(gridDiv) {
    gridDiv.onmouseover = () => {
        gridDiv.style.backgroundColor = 'black';
    }
}

