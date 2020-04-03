export class GalleryUtil {
	static getGalleryNameFromGalleryRoute(galleryRoute) {
		return galleryRoute.split('-').join(' ');
	}
}
