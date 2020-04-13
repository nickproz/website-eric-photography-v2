<template>
	<div class="shop">
		<a :href="SHOP_LINK" target="_blank">
			<img
				class="hvr-grow-rotate shop-logo"
				alt="Shop logo"
				src="../../assets/images/shop-logo.png"
			/>
		</a>
	</div>
</template>

<script>
import { SHOP_LINK } from '../../util/constants/initial-config';

export default {
	name: 'shop',
	data() {
		return {
			SHOP_LINK
		};
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
