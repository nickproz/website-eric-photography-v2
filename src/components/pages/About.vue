<template>
	<div class="about">
		<div class="about-me-image-container">
			<img
				src="../../assets/images/about-me-pic.jpg"
				alt="About me image"
				class="about-me-image"
			/>
		</div>
		<div class="about-me-text-container">
			<p class="about-me-text" v-html="ABOUT_ME_HTML"></p>
		</div>
	</div>
</template>

<script>
import { ABOUT_ME_HTML } from '../../util/constants/initial-config';

export default {
	name: 'about',
	data() {
		return {
			ABOUT_ME_HTML
		};
	}
};
</script>

<style lang="less" scoped>
@import '../../style/breakpoints';

.about {
	.about-me-text-container {
		font-size: 1.6rem;
		text-align: justify;
		margin-top: 3rem;
	}
	.about-me-text {
		margin-bottom: 0;
	}
	.about-me-image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.about-me-image {
		width: 30rem;
		border-radius: 50rem;
	}
	.email-link {
		margin-left: 0.4rem;
	}

	@media @break-tablet {
		flex-direction: row !important;

		.about-me-image-container,
		.about-me-text-container {
			width: 50%;
			display: flex;
			align-items: center;
		}
		.about-me-text-container {
			margin-top: 0;
		}
	}
}
</style>
