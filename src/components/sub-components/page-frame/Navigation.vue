<template>
	<div class="navigation" />
</template>

<script>
/**
 * Component for the navigation.
 */
export default {
	name: 'navigation'
};
</script>

<style lang="less" scoped>
@import '../../../style/variables.less';

.navigation {
	height: @height--nav-footer;
	width: 100%;
	background-color: @color--app-theme;
}
</style>
