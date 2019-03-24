let generated = false;

function createDivs() {
	if (!generated) {
		generated = true;
		const container = document.querySelector('#container');
		let count = 0;
		for (let i = 0; i < 16; i++) {
			let row = document.createElement('div');
			row.setAttribute('class', 'row');
			container.appendChild(row);

			for (let j = 0; j < 16; j++) {
				count++;
				let col = document.createElement('div');
				let id = 'col' + count;
				col.setAttribute('class', 'col unclicked');
				col.setAttribute('id', id);
				col.addEventListener('mouseenter', changeColor, false);
				row.appendChild(col);
			}
			
		}
		console.log('Done!');
	}
}

// im doing this fucking e thing to denote a class because im about that life
function changeColor(e) {
	e.target.classList.remove('unclicked');
	e.target.classList.add('clicked');
}

function reset() {
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