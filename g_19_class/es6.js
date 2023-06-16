class FontStyle {
	constructor(el, option) {
		this.el = document.querySelector(el);
		//내부적으로 디폴트 옵션 객체를 생성
		this.default = { type: 'all', color: 'gray', size: '30px' };
		//디폴트 객체에다가 옵션으로 넘어오는 객체를 덮어쓰기 해서 합침
		//내부에는 합쳐진 옵션 객체를 활용
		this.result = { ...this.default, ...option };
		console.log(this.result);

		this.el.addEventListener('click', () => {
			if (this.result.type === 'all') {
				this.changeSize(this.result.size);
				this.changeColor(this.result.color);
			}
			if (this.result.type === 'color') this.changeColor(this.result.color);
			if (this.result.type === 'size') this.changeSize(this.result.size);
		});
	}
	changeSize(size) {
		this.el.style.fontSize = size;
	}
	changeColor(color) {
		this.el.style.color = color;
	}
}

new FontStyle('#title1');
new FontStyle('#title2', { color: 'orange' });