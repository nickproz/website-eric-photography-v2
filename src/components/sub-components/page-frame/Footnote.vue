<template>
	<footer class="footnote"></footer>
</template>

<script>
/**
 * Component for the footer.
 */
export default {
	name: 'footnote'
};
</script>

<style lang="less" scoped>
@import '../../../style/variables.less';

.footnote {
	height: @height--nav-footer;
	width: 100%;
	background-color: @color--app-theme;
}
</style>
