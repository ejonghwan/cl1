const secs = document.querySelectorAll('section');
const list = document.querySelector('ul');
const btns = list.querySelectorAll('li');
const speed = 500;
let enableEvent = true;
let autoScroll = true;

window.addEventListener('scroll', activation);
window.addEventListener('resize', modifyPos);
autoScroll && window.addEventListener('mousewheel', moveAuto, { passive: false })
// passive는 휠의 기본기능을 프~디로 막았는데 이거 false안주면 안막힘


btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => enableEvent && moveScroll(idx));
});

function activation() {
	const scroll = window.scrollY;
	const baseline = -window.innerHeight / 2;

	secs.forEach((_, idx) => {
		if (scroll >= secs[idx].offsetTop + baseline) {
			for (const el of btns) el.classList.remove('on');
			btns[idx].classList.add('on');
			for (const el of secs) el.classList.remove('on');
			secs[idx].classList.add('on');
		}
	});
}

function moveScroll(idx) {
	enableEvent = false;
	new Anime(window, {
		prop: 'scroll',
		value: secs[idx].offsetTop,
		duration: speed,
		callback: () => (enableEvent = true),
	});
}

//브라우저 리사이즈시 현재 스크롤 위치값 갱신해주는 함수
function modifyPos() {
	const active = list.querySelector('li.on');
	//const active_index = btns.indexOf(active);
	//전체 li요소들 중에서 on이 붙어있는 li의 순서값을 저장해주는 구문
	//indexOf는 순수배열에서만 호출 가능 (btns는 유사배열)
	//Array.from(유사배열) -> 유사배열을 순수배열로 변환해서 반환
	const active_index = Array.from(btns).indexOf(active);
	window.scroll(0, secs[active_index].offsetTop);
}



function moveAuto(e) {
	e.preventDefault();
	const active = list.querySelector('li.on');
	const active_index = Array.from(btns).indexOf(active);

	if (e.deltaY > 0) {
		if (active_index === btns.length - 1) return;
		moveScroll(active_index + 1);
	} else {
		if (active_index === 0) return;
		moveScroll(active_index - 1);
	}
}