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
}

//HOVER EFFECT:
//Start by making 2 event listners: one for when a div is passed over
//and the second is when a hovered over div becomes white again
//The hover effect can be created either by adding a new class to the div
//or changing the div’s background color using JavaScript.
