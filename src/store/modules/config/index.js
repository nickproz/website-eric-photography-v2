import { INITIAL_CONFIG } from "../../../util/constants/initial-config";

export const actionTypes = {
	FETCH_INITIAL_CONFIG: 'FETCH_INITIAL_CONFIG'
};

export const mutationTypes = {
	UPDATE_INITIAL_CONFIG: 'UPDATE_INITIAL_CONFIG'
};

export const getterTypes = {
	GET_INITIAL_CONFIG: 'initialConfig',
	GET_ABOUT_ME_HTML: 'aboutMeHtml',
	GET_SHOP_LINK: 'shopLink',
	GET_WEBSITE_NAME: 'websiteName',
	GET_CLOUDINARY_CLOUD_NAME: 'cloudinaryCloudName',
};

const state = {
	initialConfig: {
		ABOUT_ME_HTML: INITIAL_CONFIG.ABOUT_ME_HTML,
		SHOP_LINK: INITIAL_CONFIG.SHOP_LINK,
		WEBSITE_NAME: INITIAL_CONFIG.WEBSITE_NAME,
		CLOUDINARY_CLOUD_NAME: INITIAL_CONFIG.CLOUDINARY_CLOUD_NAME,
	}
};

const getters = {
	[getterTypes.GET_INITIAL_CONFIG]: state => state.initialConfig,
	[getterTypes.GET_ABOUT_ME_HTML]: state => state.initialConfig.ABOUT_ME_HTML,
	[getterTypes.GET_SHOP_LINK]: state => state.initialConfig.SHOP_LINK,
	[getterTypes.GET_WEBSITE_NAME]: state => state.initialConfig.WEBSITE_NAME,
	[getterTypes.GET_CLOUDINARY_CLOUD_NAME]: state => state.initialConfig.CLOUDINARY_CLOUD_NAME,
};

const actions = {
	[actionTypes.GET_INITIAL_CONFIG]({ commit }) {
		commit((mutationTypes.UPDATE_INITIAL_CONFIG), INITIAL_CONFIG);
	}
};

const mutations = {
	[mutationTypes.UPDATE_INITIAL_CONFIG](state, data) {
		state.initialConfig = data;
	}
};

export default {
	state,
	getters,
	actions,
	mutations,
	actionTypes,
	mutationTypes,
	getterTypes
};
