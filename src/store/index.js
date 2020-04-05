import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import cloudinary from './modules/cloudinary';
import config from './modules/config';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const mutationsToIgnore = [];
const vuexLocalStorage = new VuexPersist({
	// The key to store the state on in the storage provider
	key: 'vuex',
	// This can also be window.sessionStorage or localForage
	storage: window.localStorage,

	// Passes the state and returns the state with only the objects (modules) you want to store
	reducer: (state) => ({}),

	// Filters out all mutations that are in mutations to ignore
	filter: (mutation) => mutationsToIgnore.indexOf(mutation.type) === -1
});

export default new Vuex.Store({
	modules: {
		cloudinary,
		config
	},
	strict: debug,
	plugins: [vuexLocalStorage.plugin]
});
