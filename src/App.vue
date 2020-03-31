<template>
	<v-app class="application">
		<navigation></navigation>
		<router-view class="main-content"></router-view>
		<footnote></footnote>
	</v-app>
</template>

<script>
import Footnote from './components/sub-components/page-frame/Footnote';
import Navigation from './components/sub-components/page-frame/Navigation';

export default {
	name: 'app',
	components: {
		Footnote,
		Navigation
	}
};
</script>

<style lang="less">
:root {
	// 1rem = 10px
	font-size: 62.5%;
}
body {
	margin: 0;
}

body, .v-application {
	font-family: 'Lato', sans-serif !important;
}

.application {
	display: flex;
	flex-direction: column;
	width: 100%;

	.main-content {
		max-width: 1200px;
		padding: 30px;
		display: flex;
		flex: 1 0 auto;
		justify-content: center;
		align-self: center;
		align-items: center;
		flex-direction: column;
	}
}
</style>
