exports.files = {
	javascripts: {
		joinTo: {
		  'js/app.js': /^app/,
		},
	},
	stylesheets: {
		joinTo: 'css/app.css'
	}
};

exports.plugins = {
	babel: {
		presets: ['latest']
	},
	sass: {
		mode: 'native',
		options: {
			includePaths: [
				'node_modules/normalize.css',
				'node_modules/sass-mq'
			]
		}
	},
	postcss: {
		optimize: true,
		processors: [
			require('autoprefixer')([
				'last 2 versions',
				'Explorer >= 10',
				'Android >= 4.1',
				'Safari >= 8',
				'iOS >= 7'
			])
		]
	}
};

exports.modules = {
	autoRequire: {
		'js/app.js': ['js/initialize']
	}
};

exports.server = {
	command: 'php -S 0.0.0.0:8000 -t public'
}
