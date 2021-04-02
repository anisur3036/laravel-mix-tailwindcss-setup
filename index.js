let mix = require('laravel-mix')

class Tailwind {
	dependencies() {
		this.requiresReload="You have to configure tailwind config file"
		return ['tailwindcss', 'autoprefixer']
	}

	register() {

	}

	boot() {
		if(Mix.components.has('sass')) {
			Config.processCssUrls = false
		}
		let tailwindcss = require('tailwindcss')
		Config.postCss.push(tailwindcss('./tailwind.config.js'))
	}
}

mix.extend('tailwind', new Tailwind())