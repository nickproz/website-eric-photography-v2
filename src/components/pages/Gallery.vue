<template>
	<div class="gallery">
		<!-- Loading indicator -->
		<v-progress-circular
			class="no-transition"
			v-if="areImagesLoading"
			:rotate="360"
			:size="100"
			:width="10"
			:value="percentOfImagesLoaded"
			color="primary"
		>
			{{ percentOfImagesLoaded }}%
		</v-progress-circular>

		<!-- Back button -->
		<back-button v-show="!areImagesLoading"></back-button>

		<!-- Gallery images -->
		<transition name="fade">
			<gallery-images
				:images="galleryPhotoData"
				v-show="!areImagesLoading"
				@imageLoad="onImageLoad"
				@allImagesLoaded="onAllImagesLoaded"
			/>
		</transition>
	</div>
</template>

<script>
import { RouterUtil } from '../../util/RouterUtil';
import GalleryImages from './GalleryImages';
import BackButton from "../sub-components/BackButton";

export default {
	name: 'gallery',
	components: { BackButton, GalleryImages },
	props: {
		galleryPhotoData: {
			required: true,
			type: Array
		}
	},
	data() {
		return {
			areImagesLoading: true,
			percentOfImagesLoaded: 0
		};
	},
	methods: {
		navigateBack() {
			RouterUtil.navigateBack();
		},
		onImageLoad(percentageOfImagesLoaded) {
			this.percentOfImagesLoaded = percentageOfImagesLoaded;
		},
		onAllImagesLoaded() {
			setTimeout(() => (this.areImagesLoading = false), 500)
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/breakpoints';

.gallery {
	width: 100%;

	.loading-indicator {
		color: white;
		font-weight: bold;
		width: 50%;
	}
	.no-transition .progress-circular__overlay {
		transition: all 0.1s ease-in-out;
	}
}
</style>
