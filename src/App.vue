<template>
	<v-app class="application">
		<header-bar></header-bar>
		<transition
			name="fade"
			mode="out-in"
		>
			<router-view class="main-content" :key="$route.fullPath"></router-view>
		</transition>
		<footer-bar></footer-bar>
	</v-app>
</template>

<script>
import FooterBar from './components/sub-components/page-frame/footer/FooterBar';
import HeaderBar from './components/sub-components/page-frame/header/HeaderBar';

export default {
	name: 'app',
	components: {
		HeaderBar,
		FooterBar
	},
	created() {
		document.addEventListener('contextmenu', event => {
			// Prevent right clicks on images (so that users cannot save)
			if(event.target.tagName === 'IMG') {
				event.preventDefault()
			}
		});
	}
};
</script>

<style lang="less">
:root {
	// 1rem = 10px
	font-size: 62.5%;
}
html, body {
	height: 100%;
}
body {
	margin: 0;
}

body,
.v-application {
	font-family: 'Lato', sans-serif !important;
}

img {
	height: auto;
}

.application {
	display: flex;
	flex-direction: column;
	width: 100%;

	.main-content {
		max-width: 120rem;
		padding: 4rem;
		display: flex;
		flex: 1 0 auto;
		justify-content: center;
		align-self: center;
		flex-direction: column;
	}

	/* Vue lightbox overrides */
	.vue-lb-footer-count {
		display: none;
	}

	.vue-lb-button-close {
		position: absolute;
		right: 2rem;
		top: 1rem;
		width: 5rem;
		height: 5rem;
	}

	.vue-lb-content {
		position: static;
		width: 100%;
	}

	.vue-lb-figure {
		width: 100%;
		background-image: url('assets/images/standard/loader.gif');
		background-position: center center;
		background-size: 4rem 4rem;
		min-height: 30rem;
		min-width: 30rem;
	}

	/* Fade transitions */
	.fade-enter-active,
	.fade-leave-active {
		transition-duration: 0.25s;
		transition-property: opacity;
		transition-timing-function: ease;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
}
</style>
