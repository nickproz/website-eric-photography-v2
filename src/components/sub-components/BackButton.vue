<template>
	<div class="back-button">
		<v-btn text @click="navigateBack" color="primary">&lt; Back</v-btn>
	</div>
</template>

<script>
import { RouterUtil } from '../../util/RouterUtil';

export default {
	name: 'back-button',
	data() {
		return {};
	},
	computed: {},
	created() {},
	methods: {
		navigateBack() {
			RouterUtil.navigateUrlSegmentBack();
		}
	}
};
</script>

<style lang="less" scoped>
.back-button {
	width: 100%;
	margin-bottom: 1.5rem;
}
</style>
