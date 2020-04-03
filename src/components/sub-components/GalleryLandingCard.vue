<template>
	<div class="gallery-landing-card hvr-float">
		<v-card>
			<div class="card-image-container">
				<img :src="imgSrc" :alt="imgAlt" class="card-image" />
			</div>
			<v-card-text class="card-text">
				<h2 class="card-primary-text">{{ cardPrimaryText }}</h2>
				<h3 v-if="cardSecondaryText" class="card-secondary-text">
					{{ cardSecondaryText }}
				</h3>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'gallery-landing-card',
	props: {
		imgSrc: {
			required: true,
			type: String
		},
		imgAlt: {
			required: false,
			type: String,
			default: 'Gallery card image'
		},
		cardPrimaryText: {
			required: true,
			type: String
		},
		cardSecondaryText: {
			required: false,
			type: String,
			default: null
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/colors.less';

.gallery-landing-card {
	cursor: pointer;

	.card-image-container {
		max-height: 170px;
		overflow: hidden;
	}
	.card-image {
		width: 100%;
	}
	.card-text {
		font-size: 1.2rem;
		line-height: 1.8rem;
		text-align: center;
	}
	.card-primary-text {
		color: black;
		text-transform: capitalize;
		margin-bottom: 0.5rem;
	}
	.card-secondary-text {
		margin-top: 0.5rem;
		color: @app-gray;
	}
}
</style>
