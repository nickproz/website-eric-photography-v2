<template>
	<div class="gallery-images">
		<img v-for="(image, index) in images"
			:key="index"
			:src="image.thumbnailUrl"
			class="image"
			alt="Gallery image"
			@load="onImageLoad()"
		/>
	</div>
</template>

<script>
import { ON_ALL_IMAGES_LOADED, ON_IMAGE_LOAD } from "../../util/constants/events";

export default {
	name: 'gallery-images',
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
			/*background-color: white;*/
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
