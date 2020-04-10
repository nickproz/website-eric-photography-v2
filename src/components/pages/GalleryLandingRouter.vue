<template>
	<div class="gallery-landing-router">
		<!-- Loading indicator -->
		<v-progress-circular v-if="isLoading" indeterminate color="primary"></v-progress-circular>

		<!-- Gallery landing -->
		<gallery-landing v-if="galleryLandingData" :gallery-landing-data="galleryLandingData"></gallery-landing>

		<!-- Gallery -->
		<gallery v-if="galleryPhotoData" :gallery-photo-data="galleryPhotoData"></gallery>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cloudinary from '../../store/modules/cloudinary';
import { RouterUtil } from "../../util/RouterUtil";
import { GalleryUtil } from "../../util/GalleryUtil";
import GalleryLanding from "./GalleryLanding";
import Gallery from "./Gallery";

export default {
	name: 'gallery-landing-router',
	components: { Gallery, GalleryLanding },
	data() {
		return {
			isLoading: true,
			galleryPhotoData: null,
			galleryLandingData: null
		};
	},
	computed: {
		...mapGetters([cloudinary.getterTypes.GET_GALLERY_DATA]),
		galleryPath() {
			return this.$router.currentRoute.params.pathMatch;
		},
	},
	created() {
		this.fetchCloudinaryData().finally(() => {
			const galleryData = this.galleryData(this.galleryPath);
			if (!galleryData) {
				// If no gallery data is found, just navigate back home
				this.navigateHome();
			} else {
				this.handleGalleryData(galleryData);
			}
			this.isLoading = false;
		});
	},
	methods: {
		...mapActions({
			fetchCloudinaryData: cloudinary.actionTypes.FETCH_CLOUDINARY_DATA
		}),
		handleGalleryData(galleryData) {
			if(galleryData instanceof Array) {
				// If we have an array, transform to photo data and show the photo gallery
				this.galleryPhotoData = GalleryUtil.transformCloudinaryGalleryPhotoData(galleryData);
			} else if(galleryData instanceof Object) {
				// If we have an object, transform to landing data and show the gallery landing page
				this.galleryLandingData = GalleryUtil.transformCloudinaryGalleryLandingData(galleryData);
			} else {
				this.navigateHome();
			}
		},
		navigateHome() {
			RouterUtil.navigateHome();
		},
	}
};
</script>

<style lang="less" scoped>
	.gallery-landing-router {
	}
</style>
