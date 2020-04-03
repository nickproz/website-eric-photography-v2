import Vue from 'vue';
import Router from 'vue-router';

import * as routes from '../util/constants/routes.js';
import GalleryLanding from '../components/pages/GalleryLanding.vue';
import Gallery from '../components/pages/Gallery';
import About from '../components/pages/About';
import Shop from '../components/pages/Shop';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: routes.HOME_ROUTE,
			name: 'Root',
			redirect: routes.GALLERY_LANDING_ROUTE
		},
		{
			path: routes.GALLERY_LANDING_ROUTE,
			name: 'Gallery Landing',
			component: GalleryLanding
		},
		{
			path: routes.GALLERY_ROUTE,
			name: 'Gallery',
			component: Gallery
		},
		{
			path: routes.ABOUT_ROUTE,
			name: 'About',
			component: About
		},
		{
			path: routes.SHOP_ROUTE,
			name: 'Shop',
			component: Shop
		},
		{
			path: '*',
			name: 'Wildcard',
			redirect: routes.HOME_ROUTE
		}
	]
});
