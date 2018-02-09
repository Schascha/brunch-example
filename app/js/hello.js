var
	DEFAULTS = {
		el: 'h1',
		html: 'Hallo Welt'
	}
;

class Hello {

	constructor(options) {
		this.options = Object.assign({}, DEFAULTS, options);
		document.querySelector(this.options.el).innerHTML = this.options.html;
	}

}

export default Hello;
