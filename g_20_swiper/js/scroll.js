const secs = document.querySelectorAll('.myScroll');
const btns = document.querySelectorAll('#scroll_navi li');
//섹션의 높이값이 일괄적으로 100vh가 아니라 커스텀 높이값일 경우에는 baseline값을 고정 px로 지정
const baseline = -200;

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;

	if (scroll >= secs[0].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[0].classList.add('on');
		//for (const el of secs) el.classList.remove('on');
		if (!secs[0].classList.contains('on')) secs[0].classList.add('on');
	}
	if (scroll >= secs[1].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[1].classList.add('on');
		//for (const el of secs) el.classList.remove('on');
		if (!secs[1].classList.contains('on')) secs[1].classList.add('on');
	}
	if (scroll >= secs[2].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[2].classList.add('on');
		//for (const el of secs) el.classList.remove('on');
		if (!secs[2].classList.contains('on')) secs[2].classList.add('on');
	}
	if (scroll >= secs[3].offsetTop + baseline) {
		for (const el of btns) el.classList.remove('on');
		btns[3].classList.add('on');
		//for (const el of secs) el.classList.remove('on');
		if (!secs[3].classList.contains('on')) secs[3].classList.add('on');
	}
});

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		window.scrollTo({ top: secs[idx].offsetTop, behavior: 'smooth' });
	});
});
