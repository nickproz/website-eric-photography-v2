<template>
	<div class="home">
		<v-btn color="info" @click="buttonClick()">Hello World</v-btn>
	</div>
</template>

<script>
export default {
	name: 'home',
	computed: {},
	methods: {
		/**
		 * Run when our home button is clicked.
		 */
		buttonClick() {
			alert('Hello World!');
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/variables.less';

.home {
	align-items: center;
	display: flex;

	h1 {
		color: @color--app-theme;
	}
}
</style>
