<template>
	<div class="gallery-images">
		<img v-for="(image, index) in images"
			:key="index"
			:src="image.thumb"
			class="image hvr-float"
			alt="Gallery image"
			@load="onImageLoad()"
			@click="openGallery(index)"
		/>
		<LightBox
			ref="lightbox"
			:media="images"
			:show-caption="false"
			:show-light-box="false"
		/>
	</div>
</template>

<script>
import LightBox from 'vue-image-lightbox'
import { ON_ALL_IMAGES_LOADED, ON_IMAGE_LOAD } from "../../util/constants/events";

export default {
	name: 'gallery-images',
	components: {
		LightBox,
	},
	props: {
		images: {
			required: true,
			type: Array
		},
	},
	data() {
		return {
			totalImagesLoaded: 0
		}
	},
	computed: {
		totalImagesToLoad() {
			return this.images ? this.images.length : 0;
		},
		percentOfImagesLoaded() {
			return this.totalImagesToLoad ? Math.round((this.totalImagesLoaded / this.totalImagesToLoad) * 100) : 0
		}
	},
	methods: {
		onImageLoad() {
			this.totalImagesLoaded += 1;
			this.$emit(ON_IMAGE_LOAD, this.percentOfImagesLoaded);

			// All images have finished loading
			if(this.totalImagesLoaded >= this.totalImagesToLoad) {
				this.$emit(ON_ALL_IMAGES_LOADED)
			}
		},
		openGallery(index) {
			this.$refs.lightbox.showImage(index)
		}
	}
};
</script>

<style lang="less" scoped>
	@import '../../style/breakpoints.less';

	.gallery-images {
		column-count: 1;
		column-gap: 1em;

		.image {
			cursor: pointer;
			display: inline-block;
			margin: 0 0 1em;
			width: 100%;
		}

		@media @break-mobile {
			column-count: 2;
		}

		@media @break-tablet {
			column-count: 3;
		}

		@media @break-desktop {
			column-count: 4;
		}
	}
</style>
