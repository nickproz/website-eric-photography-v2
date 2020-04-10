<template>
	<div class="gallery" :class="{ 'fix-header-alignment': !areImagesLoading }">
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

		<div class="images-container" v-show="!areImagesLoading">
			<!-- Back button -->
			<back-button></back-button>

			<!-- Gallery images -->
			<transition name="fade">
				<gallery-images
					:images="galleryPhotoData"
					@imageLoad="onImageLoad"
					@allImagesLoaded="onAllImagesLoaded"
				/>
			</transition>
		</div>
	</div>
</template>

<script>
import GalleryImages from './GalleryImages';
import BackButton from '../sub-components/BackButton';

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

	&.fix-header-alignment {
		flex: 1;
	}
	.images-container {
		margin-bottom: auto;
	}
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
