<template>
	<div class="gallery-landing">
		<v-progress-circular
			v-if="isLoading"
			indeterminate
		></v-progress-circular>
		<template v-else>
			<div class="cards">
				<gallery-landing-card
					class="card"
					v-for="(card, index) in galleryLandingCardData"
					:key="index"
					:img-src="card.imgSrc"
					:img-alt="card.imgAlt"
					:card-primary-text="card.cardPrimaryText"
					:card-secondary-text="card.cardSecondaryText"
					@click.native="navigateToRoute(card.path)"
				>
				</gallery-landing-card>
			</div>
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cloudinary from '../../store/modules/cloudinary';
import GalleryLandingCard from "../sub-components/GalleryLandingCard";
import { GALLERY_LANDING_ROUTE } from '../../util/constants/routes';

export default {
	name: 'gallery-landing',
	components: { GalleryLandingCard },
	data() {
		return {
			isLoading: true
		}
	},
	computed: {
		...mapGetters([cloudinary.getterTypes.GET_GALLERY_LANDING_CARD_DATA])
	},
	created() {
		this.fetchCloudinaryData()
			.finally(() => (this.isLoading = false));
	},
	methods: {
		...mapActions({
			fetchCloudinaryData: cloudinary.actionTypes.FETCH_CLOUDINARY_DATA
		}),
		navigateToRoute(path) {
			this.$router.push(`${GALLERY_LANDING_ROUTE}/${path}`)
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
			padding: 10px;
			margin: 5px 0;
			height: 250px;
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
