<template>
	<div class="gallery">
		<!-- Loading indicator -->
		<v-progress-circular
			v-if="shouldShowLoadingIndicating"
			:rotate="360"
			:size="100"
			:width="10"
			:value="percentOfImagesLoaded"
			color="#444"
		>
			{{ percentOfImagesLoaded }}%
		</v-progress-circular>

		<!-- Images -->
		<template v-if="!isInitialDataLoading">
			<!-- Header -->
			<div v-show="!areImagesLoading" class="gallery-header-container">
				<v-btn text class="back-button" @click="navigateHome">&lt; Back</v-btn>
				<h1 class="gallery-header">{{ galleryName }}</h1>
			</div>

			<!-- Gallery images -->
			<transition name="fade">
				<gallery-images
					:images="galleryData(galleryRoute)"
					v-show="!areImagesLoading"
					@imageLoad="onImageLoad"
					@allImagesLoaded="onAllImagesLoaded"
				/>
			</transition>
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cloudinary from '../../store/modules/cloudinary';
import { GALLERY_PARAM, HOME_ROUTE } from "../../util/constants/routes";
import GalleryImages from "./GalleryImages";
import { GalleryUtil } from "../../util/GalleryUtil";

export default {
	name: 'gallery',
	components: {GalleryImages},
	data() {
		return {
			isInitialDataLoading: true,
			areImagesLoading: true,
			percentOfImagesLoaded: 0
		}
	},
	computed: {
		...mapGetters([cloudinary.getterTypes.GET_GALLERY_DATA]),
		galleryRoute() {
			return this.$route.params[GALLERY_PARAM];
		},
		galleryName() {
			return GalleryUtil.getGalleryNameFromGalleryRoute(this.galleryRoute);
		},
		shouldShowLoadingIndicating() {
			return this.isInitialDataLoading || this.areImagesLoading;
		}
	},
	created() {
		this.fetchCloudinaryData()
			.finally(() => {
				if(!this.galleryData(this.galleryRoute)) {
					// If no gallery data is found, just navigate back home
					this.navigateHome();
				} else {
					this.isInitialDataLoading = false;
				}
			});
	},
	methods: {
		...mapActions({
			fetchCloudinaryData: cloudinary.actionTypes.FETCH_CLOUDINARY_DATA
		}),
		navigateHome() {
			this.$router.push(HOME_ROUTE);
		},
		onImageLoad(percentageOfImagesLoaded) {
			this.percentOfImagesLoaded = percentageOfImagesLoaded;
		},
		onAllImagesLoaded() {
			setTimeout(() => (this.areImagesLoading = false), 500);
		}
	}
};
</script>

<style lang="less" scoped>
	@import '../../style/breakpoints';

	.gallery {
		width: 100%;

		.gallery-header-container {
			width: 100%;
			margin-bottom: 15px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.gallery-header {
			text-transform: capitalize;
		}
		.back-button {
			position: absolute;
			left: 0;
		}
		.loading-indicator {
			color: white;
			font-weight: bold;
			width: 50%;
		}

		// Fade transition
		.fade-enter-active, .fade-leave-active {
			transition: opacity 1.5s;
		}
		.fade-enter, .fade-leave-to {
			opacity: 0;
		}
	}
</style>
