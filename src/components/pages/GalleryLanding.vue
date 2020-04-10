<template>
	<div class="gallery-landing">
		<!-- Back button (if we are in a nested landing page) -->
		<back-button v-if="galleryRoute"></back-button>

		<!-- Landing cards -->
		<div class="cards">
			<gallery-landing-card
				class="card"
				v-for="(card, index) in galleryLandingData"
				:key="index"
				:img-src="card.src"
				:img-alt="card.alt"
				:card-primary-text="card.cardPrimaryText"
				:card-secondary-text="card.cardSecondaryText"
				@click.native="navigateToRoute(card.path)"
			>
			</gallery-landing-card>
		</div>
	</div>
</template>

<script>
import GalleryLandingCard from '../sub-components/GalleryLandingCard';
import BackButton from "../sub-components/BackButton";

export default {
	name: 'gallery-landing',
	components: { BackButton, GalleryLandingCard },
	props: {
		galleryLandingData: {
			required: true,
			type: Array
		}
	},
	computed: {
		galleryRoute() {
			return this.$router.currentRoute.params.pathMatch;
		},
	},
	methods: {
		navigateToRoute(path) {
			const currentPath = this.$router.currentRoute.path;
			this.$router.push(`${currentPath}/${path}`);
		}
	}
};
</script>

<style lang="less" scoped>
@import '../../style/breakpoints';

.gallery-landing {
	.cards {
		margin: 0 auto;
		display: grid;
		grid-gap: 1rem;
	}

	.card {
		padding: 1rem;
		margin: 0.5rem 0;
		height: 25rem;
	}

	@media @break-mobile {
		.cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media @break-tablet {
		.cards {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media @break-desktop {
		.cards {
			grid-template-columns: repeat(4, 1fr);
		}
	}
}
</style>
