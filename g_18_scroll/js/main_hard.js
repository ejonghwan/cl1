const secs = document.querySelectorAll('section');
const list = document.querySelector('ul');
const btns = list.querySelectorAll('li');
const icon = document.querySelector('.svgBox path');
const box = document.querySelector('.box');
const icon_len = 2730;
const speed = 500;
const baseline = -window.innerHeight / 2;
let enableEvent = true;
let autoScroll = true;
let eventBlocker = null;

window.addEventListener('scroll', () => {
	//커스텀 스크롤함수 호출 (throttling구문 밖에 호출하는 이유는 path모션을 부드럽게 실행하기 위함)
	sec3_custom_scroll();
	sec4_custom_scroll();

	if (eventBlocker) return;
	eventBlocker = setTimeout(() => {
		activation();
		eventBlocker = null;
	}, speed);
});
window.addEventListener('resize', () => {
	if (eventBlocker) return;
	eventBlocker = setTimeout(() => {
		modifyPos();
		eventBlocker = null;
	}, speed);
});
autoScroll && window.addEventListener('mousewheel', moveAuto, { passive: false });

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => enableEvent && moveScroll(idx));
});

function activation() {
	const scroll = window.scrollY;

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

function modifyPos() {
	const active = list.querySelector('li.on');
	const active_index = Array.from(btns).indexOf(active);
	window.scrollTo({ top: secs[active_index].offsetTop, behavior: 'smooth' });
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

function sec3_custom_scroll() {
	const scroll = window.scrollY;
	let scroll2 = (scroll - secs[2].offsetTop - baseline) * 5;

	if (scroll > secs[2].offsetTop + baseline) {
		scroll2 >= icon_len && (scroll2 = icon_len);
		icon.style.strokeDashoffset = icon_len - scroll2;
	} else {
		icon.style.strokeDashoffset = icon_len;
	}
}

function sec4_custom_scroll() {
	const scroll = window.scrollY;
	let scroll2 = (scroll - secs[3].offsetTop - baseline) / 500;

	if (scroll > secs[3].offsetTop + baseline) {
		box.style.transform = `scale(${1 + scroll2}) rotate(${0 + scroll2 * 100}deg)`;
		box.style.opacity = 1 - scroll2;
	} else {
		box.style.transform = `scale(1) rotate(0deg)`;
		box.style.opacity = 1;
	}
}