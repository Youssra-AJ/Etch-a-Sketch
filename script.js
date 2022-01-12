//create one big container Div in HTML
//create a div in JS using DOM
//create a single grid variable
// give it 7cm height in CSS
//Write a for loop that would repeat the div 16 times (horizontally? Vertically?)
//You might wanna google this



for (i = 0; i < 256; i++) {
    const mainDiv = document.querySelector('#container');

    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-div');
    gridDiv.style.height = '30px';
    gridDiv.style.width = '30px';
    gridDiv.style.display = 'flex';
    mainDiv.appendChild(gridDiv);

applyHoverColor(gridDiv);    
}

function applyHoverColor(gridDiv) {
    gridDiv.onmouseover = () => {
        gridDiv.classList.add('color-box');
    }
}