<template>
	<div class="header-navigation">
		<v-bottom-navigation :value="activeButtonIndex" color="primary" horizontal>
			<v-btn
				v-for="(button, index) in navigationButtons"
				:key="index"
				:value="button.buttonIndex"
				class="navigation-button"
				@click="navigateToRoute(button.route)"
			>
				<span>{{ button.name }}</span>
				<v-icon small class="navigation-button-icon">{{ button.icon }}</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</div>
</template>

<script>
import { RouterUtil } from '../../../../util/RouterUtil';
import { ABOUT_ROUTE, GALLERY_ROUTE, SHOP_ROUTE } from '../../../../util/constants/routes';

export default {
	name: 'header-navigation',
	data() {
		return {
			activeButtonIndex: 1,
			navigationButtons: [
				{
					name: 'Gallery',
					icon: 'fas fa-camera',
					route: GALLERY_ROUTE,
					buttonIndex: 1
				},
				{
					name: 'About',
					icon: 'fas fa-info',
					route: ABOUT_ROUTE,
					buttonIndex: 2
				},
				{
					name: 'Shop',
					icon: 'fas fa-shopping-cart',
					route: SHOP_ROUTE,
					buttonIndex: 3
				}
			]
		};
	},
	watch: {
		$route({ path }) {
			this.updateActiveButton(path);
		}
	},
	created() {
		this.updateActiveButton();
	},
	methods: {
		navigateToRoute(route) {
			RouterUtil.navigateToRoute(route);
		},
		updateActiveButton(currentPath = this.$route.path) {
			const currentNavigationButton = this.navigationButtons.find(
				(button) => button.route === currentPath
			);
			this.activeButtonIndex = currentNavigationButton
				? currentNavigationButton.buttonIndex
				: 1;
		}
	}
};
</script>

<style lang="less" scoped>
.header-navigation {
	.navigation-button {
		font-size: 1rem !important;
		padding: 0 2.5rem !important;
	}
	.navigation-button-icon {
		margin-right: 1rem !important;
	}
}
</style>
