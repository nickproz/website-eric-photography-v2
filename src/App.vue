<template>
	<v-app class="application">
		<header-bar></header-bar>
		<router-view class="main-content"></router-view>
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
		max-width: 1200px;
		padding: 40px;
		display: flex;
		flex: 1 0 auto;
		justify-content: center;
		align-self: center;
		align-items: center;
		flex-direction: column;
	}

	/* Vue lightbox overrides */
	.vue-lb-footer-count {
		display: none;
	}

	.vue-lb-button-close {
		position: absolute;
		right: 20px;
		top: 10px;
		width: 50px;
		height: 50px;
	}

	.vue-lb-content {
		position: static;
		width: 100%;
	}

	.vue-lb-figure {
		width: 100%;
		background-image: url('assets/images/loader.gif');
		background-position: center center;
		background-size: 40px 40px;
		min-height: 300px;
		min-width: 300px;
	}
}
</style>
