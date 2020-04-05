<template>
	<div class="header-banner">
		<h1 class="header-text" @click="navigateHome">
			<img alt="Website logo" class="logo" src="../../../../assets/images/logo.png" />
			{{ websiteName }}
		</h1>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '../../../../store/modules/config';
import { RouterUtil } from '../../../../util/RouterUtil';

export default {
	name: 'header-banner',
	computed: {
		...mapGetters([config.getterTypes.GET_WEBSITE_NAME])
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
		font-size: 40px;
		color: white;
		text-transform: uppercase;
		padding: 25px;
		margin: 0;
		letter-spacing: 2px;
		text-shadow: 1px 1px 3px #404040;
	}
	.logo {
		height: 60px;
		vertical-align: text-top;
	}

	@media @break-mobile {
		.header-text {
			font-size: 50px;
		}
	}
}
</style>
