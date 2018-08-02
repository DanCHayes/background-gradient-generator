let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let box = document.querySelector('.box');
let h3 = document.querySelector('h3');
let body = document.getElementById('gradient');

const inputChange = () => {
	body.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ', ' 
	+ color2.value 
	+ ')';
	h3.textContent = body.style.background + ';';
	box.classList.add('output');
}

color1.addEventListener('input', inputChange);

color2.addEventListener('input', inputChange);