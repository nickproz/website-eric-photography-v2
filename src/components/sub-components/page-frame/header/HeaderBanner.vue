<template>
	<div class="header-banner">
		<h1 class="header-text" @click="navigateHome">
			<img alt="Website logo" class="logo" src="../../../../assets/images/logo.png" />
			{{ WEBSITE_NAME }}
		</h1>
	</div>
</template>

<script>
import { RouterUtil } from '../../../../util/RouterUtil';
import { WEBSITE_NAME } from '../../../../util/constants/initial-config';

export default {
	name: 'header-banner',
	data() {
		return {
			WEBSITE_NAME
		}
	},
	methods: {
		navigateHome() {
			RouterUtil.navigateHome();
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../../../style/breakpoints';

.header-banner {
	width: 100%;
	background-image: url('../../../../assets/images/header-banner.jpg');
	background-size: cover;
	background-position: center;
	display: flex;
	justify-content: center;
	align-items: center;

	.header-text {
		cursor: pointer;
		text-align: center;
		font-size: 4rem;
		color: white;
		text-transform: uppercase;
		padding: 2.5rem;
		margin: 0;
		letter-spacing: 0.2rem;
		text-shadow: 0.1rem 0.1rem 0.3rem #404040;
	}
	.logo {
		height: 6rem;
		vertical-align: text-top;
	}

	@media @break-mobile {
		.header-text {
			font-size: 5rem;
		}
	}
}
</style>
