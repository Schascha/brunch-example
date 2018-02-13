import $ from 'jquery';

var
	DEFAULTS = {
		el: 'h1',
		html: 'Hallo Welt'
	}
;

class Hello {

	constructor(options) {
		this.options = Object.assign({}, DEFAULTS, options);

		// In favor of jQuery?
		$('h1').html(this.options.html);

		// ... or vanilla JS
		// document.querySelector(this.options.el).innerHTML = this.options.html;
	}

}

export default Hello;
