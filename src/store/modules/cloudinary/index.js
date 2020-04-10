import axios from 'axios';
import { getterTypes as configGetterTypes } from '../config';
import {
	CLOUDINARY_PHOTOS_URI,
	CLOUDINARY_URI,
	SERVER_BASE_URL
} from '../../../util/constants/routes';

export const actionTypes = {
	FETCH_CLOUDINARY_DATA: 'FETCH_CLOUDINARY_DATA'
};

export const mutationTypes = {
	UPDATE_CLOUDINARY_DATA: 'UPDATE_CLOUDINARY_DATA'
};

export const getterTypes = {
	GET_CLOUDINARY_DATA: 'cloudinaryData',
	GET_GALLERY_DATA: 'galleryData'
};

const state = {
	cloudinaryData: {}
};

const getters = {
	[getterTypes.GET_CLOUDINARY_DATA]: (state) => state.cloudinaryData,
	[getterTypes.GET_GALLERY_DATA]: (state) => (galleryPath) => {
		const cloudinaryData = state.cloudinaryData || {};

		if (!galleryPath) {
			return cloudinaryData;
		}

		// Split gallery path into folder segments and traverse cloudinary data getting the nested value based on the path
		const galleryData = galleryPath
			.split('/')
			.filter((path) => !!path)
			.reduce((accumulator, currentValue) => accumulator[currentValue] || {}, cloudinaryData);

		// Return the data if we could fin dit
		if (galleryData instanceof Array) {
			return galleryData;
		} else if (galleryData instanceof Object && Object.keys(galleryData).length > 0) {
			return galleryData;
		} else {
			return null;
		}
	}
};

const actions = {
	[actionTypes.FETCH_CLOUDINARY_DATA]({ commit, getters }) {
		// Only fetch data if we haven't already
		const existingCloudinaryData = getters[getterTypes.GET_CLOUDINARY_DATA];
		if (!Object.keys(existingCloudinaryData).length) {
			const cloudinaryCloudName = getters[configGetterTypes.GET_CLOUDINARY_CLOUD_NAME];
			return axios
				.get(
					`${SERVER_BASE_URL}/${CLOUDINARY_URI}/${cloudinaryCloudName}/${CLOUDINARY_PHOTOS_URI}`
				)
				.then(({ data }) => commit(mutationTypes.UPDATE_CLOUDINARY_DATA, data));
		}
	}
};

const mutations = {
	[mutationTypes.UPDATE_CLOUDINARY_DATA](state, data) {
		state.cloudinaryData = data;
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
