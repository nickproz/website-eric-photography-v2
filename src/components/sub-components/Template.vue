<template>
	<div class="template"></div>
</template>

<script>
export default {
	name: 'template',
	data() {
		return {};
	},
	computed: {},
	created() {},
	methods: {
		buttonClick() {
			alert('Hello World!');
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/variables.less';

.template {
}
</style>
