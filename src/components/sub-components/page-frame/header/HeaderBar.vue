<template>
	<div class="header-bar">
		<header-banner></header-banner>
		<header-navigation></header-navigation>
	</div>
</template>

<script>
import HeaderBanner from './HeaderBanner';
import HeaderNavigation from './HeaderNavigation';

export default {
	name: 'header-bar',
	components: { HeaderNavigation, HeaderBanner }
};
</script>

<style lang="less" scoped>
.header-bar {
}
</style>
