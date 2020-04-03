import Vue from 'vue';
import vuetify from '../plugins/vuetify';

import router from './router';
import store from './store';
import App from './App';

import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad);

// Require our third party vendor files
require('./vendor.js');

// Create our Vue app
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	vuetify,
	render: (h) => h(App)
});
