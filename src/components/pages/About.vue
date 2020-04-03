<template>
	<div class="about">
		<div class="about-me-image-container">
			<img
				src="../../assets/images/about-me-pic.jpg"
				alt="About me Eric image"
				class="about-me-image"
			/>
		</div>
		<div class="about-me-text-container">
			<p class="about-me-text">
				Hi, my name is Eric Stiles. All photos from this site have been taken and edited by
				me. Whether it’s the long exposure blur of car head lights and ferris wheels, the
				reflection of Chicago, or the bright stars of Zion Nation Park, I typically like to
				focus on the lights in an image.
				<br /><br />
				Aside from sharing and selling my photos, I like having them as a reminder of all
				the adventures and sites I have had the privilege to experience and see. Living in
				Chicago has been such a great experience so far and I cannot wait to share more of
				my photos with all of you. I also don’t intend to stop traveling anytime soon, so
				expect to see some variety in new locations. Thank you for visiting this site and
				checking out my photos! Please reach out to me with any questions or comments that
				you may have at
				<a class="email-link" href="mailto:estiles33@gmail.com.">estiles33@gmail.com</a>.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'about'
};
</script>

<style lang="less" scoped>
@import '../../style/breakpoints';

.about {
	.about-me-image-container,
	.about-me-text-container {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.about-me-text-container {
		font-size: 1.6rem;
		text-align: justify;
		margin-top: 3rem;
	}
	.about-me-text {
		margin-bottom: 0;
	}
	.about-me-image-container {
		align-items: center;
		justify-content: center;
	}
	.about-me-image {
		width: 300px;
		border-radius: 500px;
	}
	.email-link {
		margin-left: 0.4rem;
	}

	@media @break-tablet {
		flex-direction: row !important;

		.about-me-text-container {
			margin-top: 0;
		}
	}
}
</style>
