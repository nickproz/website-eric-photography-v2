import Vue from "vue"
import Vuetify from "vuetify"
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'fa',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
	},
	theme: {
		themes: {
			light: {
				primary: colors.cyan.darken2,	// #0097A7
				secondary: colors.cyan.base,	// #00BCD4
				accent: colors.cyan.lighten2	// #4DD0E1
			}
		}
	}
})
