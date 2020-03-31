module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ['standard', 'plugin:vue/recommended', 'prettier'],
	// required to lint *.vue files
	plugins: ['html', 'vue'],
	// add your custom rules here
	rules: {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		// Sets indent spacing to 4 by default instead of 2
		indent: ['error', 4],
		// Disables an error for adding a semi-colon after all lines
		semi: 0,
		// Use tabs for indentation
		indent: ['error', 'tab'],
		// Allows us to use camel case instead of Pascal case for Vue component names
		'vue/name-property-casing': 0,
		// Allows there to be no spaces between self-closing tags (to not clash with prettier)
		'vue/html-closing-bracket-spacing': 0,
		// Forces a max of 3 attributes per line, and only 1 attribute per line for multiple lines
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 3,
				multiline: {
					max: 1,
					allowFirstLine: true
				}
			}
		],
		// Allows us to have single line elements with inner content
		'vue/singleline-html-element-content-newline': 0,
		// Do not force self closing tags as they break vue components sometimes
		'vue/html-self-closing': 0,
		// Allows us to use tabs to indent our html
		'vue/html-indent': ['error', 'tab']
	}
};
