import { GALLERY_LANDING_ROUTE } from './constants/routes';
import router from '../router';

export class RouterUtil {
	static navigateHome() {
		RouterUtil.navigateToRoute(GALLERY_LANDING_ROUTE);
	}

	static navigateToRoute(route) {
		const currentPath = router.currentRoute.path;
		if (currentPath !== route) {
			router.push(route);
		}
	}
}
