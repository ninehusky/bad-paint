let generated = false;
const GRID_SIZE = 500;

function generateGrid() {
	let length = -1;
	while (length < 0 || length > 30) {
		length = prompt('How long would you like the grid to be? (Pick a positive number less than or equal to 30!)');
	}
	if (!generated) {
		generated = true;
	} else {
		resetGrid();
	}
	createDivs(length, length);
}

function createDivs(rows, cols) {
	const container = document.querySelector('#container');
	let size = parseInt(GRID_SIZE / rows, 10);
	for (let i = 0; i < rows; i++) {
		let row = document.createElement('div');
		row.setAttribute('class', 'row');
		container.appendChild(row);

		// everything should be 960 px wide
		for (let j = 0; j < cols; j++) {
			let col = document.createElement('div');
			col.setAttribute('class', 'col unclicked');
			col.style.width = size + 'px';
			col.style.height = size + 'px';
			col.addEventListener('click', changeColor);
			row.appendChild(col);
		}
		
	}
}

function resetGrid() {
	let container = document.getElementById('container');
	while (container.firstChild) {
		container.firstChild.remove();
	}
}

function changeColor(e) {
	e.target.classList.remove('unclicked');
	e.target.classList.add('clicked');
}

function erase() {
	let rows = document.getElementById('container').children;
	for (let i = 0; i < rows.length; i++) {
		let row = rows[i].children;
		for (let j = 0; j < row.length; j++) {			
			let col = row[j];
			col.classList.remove('clicked');
			col.classList.add('unclicked');
		}
	}
}