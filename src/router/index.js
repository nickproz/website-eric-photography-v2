import Vue from 'vue';
import Router from 'vue-router';

import * as routes from '../util/constants/routes.js';
import About from '../components/pages/About';
import Shop from '../components/pages/Shop';
import GalleryLandingRouter from "../components/pages/GalleryLandingRouter";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: routes.ROOT_ROUTE,
			name: 'Root',
			redirect: routes.GALLERY_ROUTE
		},
		{
			path: `${routes.GALLERY_ROUTE}**`,
			name: 'Gallery Landing Router',
			component: GalleryLandingRouter
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
			redirect: routes.ROOT_ROUTE
		}
	]
});
