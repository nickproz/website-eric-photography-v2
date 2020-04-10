import { GALLERY_ROUTE } from './constants/routes';
import router from '../router';

export class RouterUtil {

	static navigateUrlSegmentBack() {
		const currentPath = RouterUtil.getCurrentPath();
		const newPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
		RouterUtil.navigateToRoute(newPath);
	}

	static navigateHome() {
		RouterUtil.navigateToRoute(GALLERY_ROUTE);
	}

	static navigateToRoute(route) {
		const currentPath = RouterUtil.getCurrentPath();
		if (currentPath !== route) {
			router.push(route);
		}
	}

	static getCurrentPath() {
		return router.currentRoute.path;
	}
}
