function FontStyle(el, option) {
	this.el = document.querySelector(el);

	this.el.addEventListener(
		'click',
		function () {
			console.log(this);
			if (option === undefined) {
				this.changeColor('gray');
				this.changeSize('30px');
				return;
			}

			if (option.type === 'all') {
				this.changeSize(option.size);
				this.changeColor(option.color);
			}
			if (option.type === 'color') this.changeColor(option.color);
			if (option.type === 'size') this.changeSize(option.size);
		}.bind(this)
	);
}
FontStyle.prototype.changeSize = function (size) {
	this.el.style.fontSize = size;
};
FontStyle.prototype.changeColor = function (color) {
	this.el.style.color = color;
};

new FontStyle('#title1', {
	type: 'all',
	size: '100px',
	color: 'hotpink',
});

new FontStyle('#title2', {
	type: 'color',
	color: 'aqua',
});

new FontStyle('#title3');