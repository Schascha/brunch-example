module.exports = {
	files: {
		javascripts: {
			joinTo: {
			  'js/app.js': /^app/,
			},
		},
		stylesheets: {
			joinTo: 'css/app.css'
		}
	},
	plugins: {
		babel: {
			presets: ['latest']
		},
		sass: {
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
	},
	modules: {
		autoRequire: {
			'js/app.js': ['js/initialize']
		}
	},
	server: {
		command: 'php -S 0.0.0.0:8000 -t public'
	}
}
