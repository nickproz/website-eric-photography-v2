<template>
	<div class="footer-bar">
		<v-bottom-navigation>
			<p class="footnote-text">
				For support or to report website issues, email the website creator at
				<a href="mailto:nick.prozorovsky@gmail.com" class="email-link">nick.prozorovsky@gmail.com</a>
			</p>
		</v-bottom-navigation>
	</div>
</template>

<script>
export default {
	name: 'footer-bar'
};
</script>

<style lang="less" scoped>
.footer-bar {
	.footnote-text {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		text-align: center;
		padding: 20px;
		margin: 0;
	}
	.email-link {
		margin-left: 0.4rem;
	}
}
</style>
