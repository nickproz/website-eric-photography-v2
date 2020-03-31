import axios from 'axios';
import { GalleryUtil } from "../../../util/GalleryUtil";

export const actionTypes = {
	FETCH_CLOUDINARY_DATA: 'FETCH_CLOUDINARY_DATA'
};

export const mutationTypes = {
	UPDATE_CLOUDINARY_DATA: 'UPDATE_CLOUDINARY_DATA'
};

export const getterTypes = {
	GET_CLOUDINARY_DATA: 'cloudinaryData',
	GET_GALLERY_LANDING_CARD_DATA: 'galleryLandingCardData',
	GET_GALLERY_DATA: 'galleryData'
};

const state = {
	cloudinaryData: {}
};

const getters = {
	[getterTypes.GET_CLOUDINARY_DATA]: state => state.cloudinaryData,
	[getterTypes.GET_GALLERY_DATA]: state => gallery => state.cloudinaryData && state.cloudinaryData[gallery],
	[getterTypes.GET_GALLERY_LANDING_CARD_DATA]: state => {
		return Object.entries(state.cloudinaryData)
			.map(([key, value]) => ({
				path: key,
				imgSrc: value[0].thumbnailUrl,
				imgAlt: key,
				cardPrimaryText: GalleryUtil.getGalleryNameFromGalleryRoute(key),
				cardSecondaryText: `${value.length} photos`
			}))
	}
};

const actions = {
	[actionTypes.FETCH_CLOUDINARY_DATA]({ commit, getters }) {
		// Only fetch data if we haven't already
		const existingCloudinaryData = getters[getterTypes.GET_CLOUDINARY_DATA];
		if(!Object.keys(existingCloudinaryData).length) {
			console.info('Fetching new cloudinary data.');
			return axios.get('https://nick-proz-node-server.herokuapp.com/cloudinary/photos')
				.then(({ data }) => commit(mutationTypes.UPDATE_CLOUDINARY_DATA, data))
		} else {
			console.info('Cached cloudinary data being used.')
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
