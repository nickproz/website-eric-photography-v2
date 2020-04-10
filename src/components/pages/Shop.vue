<template>
	<div class="shop">
		<a :href="shopLink" target="_blank">
			<img
				class="hvr-grow-rotate shop-logo"
				alt="Shop logo"
				src="../../assets/images/shop-logo.png"
			/>
		</a>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '../../store/modules/config';

export default {
	name: 'shop',
	computed: {
		...mapGetters([config.getterTypes.GET_SHOP_LINK])
	}
};
</script>

<style lang="less" scoped>
.shop {
	.shop-logo {
		width: 30rem;
	}
}
</style>
