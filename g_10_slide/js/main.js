const frame = document.querySelector('#slider');
const panel = frame.querySelector('.panel');
const btns = frame.querySelectorAll('.btns li');
const speed = 200;
let isActive = false;

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activatno(btns, idx);
		slidePanel(panel, idx);
	});
});



function activatno(eles, idx) {
	if(isActive) return;
	for (const el of eles) el.classList.remove('on');
	eles[idx].classList.add('on');
}

function slidePanel(ele, idx) {
	if(isActive) return;

	isActive = true
	new Anime(ele, {
		prop: 'margin-left',
		value: -100 * idx + '%',
		duration: speed,
		callback() {
			isActive = false
		}
	});
}