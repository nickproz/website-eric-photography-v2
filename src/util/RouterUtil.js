import { GALLERY_ROUTE } from './constants/routes';
import router from '../router';

export class RouterUtil {

	static navigateBack() {
		router.go(-1);
	}

	static navigateHome() {
		RouterUtil.navigateToRoute(GALLERY_ROUTE);
	}

	static navigateToRoute(route) {
		const currentPath = router.currentRoute.path;
		if (currentPath !== route) {
			router.push(route);
		}
	}
}
