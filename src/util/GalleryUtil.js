export class GalleryUtil {
	static getGalleryNameFromGalleryRoute(galleryRoute) {
		return galleryRoute.split('-').join(' ');
	}

	static transformCloudinaryGalleryLandingData(galleryLandingData) {
		return Object.entries(galleryLandingData).map(([key, value]) => ({
			path: key,
			src: this.getFirstPhotoThumbnailUrl(value),
			alt: key,
			cardPrimaryText: GalleryUtil.getGalleryNameFromGalleryRoute(key),
			cardSecondaryText: `${this.calculateNumberOfPhotos(value)} photos`
		}));
	}

	static transformCloudinaryGalleryPhotoData(galleryData) {
		return galleryData.map((photo) => ({
			src: photo.photoUrl,
			thumb: photo.thumbnailUrl
		}));
	}

	static calculateNumberOfPhotos(galleryData = []) {
		if (galleryData instanceof Array) {
			return galleryData.length;
		} else if (galleryData instanceof Object) {
			return Object.values(galleryData).reduce(
				(total, entry) => total + GalleryUtil.calculateNumberOfPhotos(entry),
				0
			);
		} else {
			return 0;
		}
	}

	static getFirstPhotoThumbnailUrl(galleryData) {
		if (galleryData instanceof Array) {
			return galleryData.length > 0 ? galleryData[0].thumbnailUrl : null;
		} else if (galleryData instanceof Object) {
			return GalleryUtil.getFirstPhotoThumbnailUrl(Object.values(galleryData)[0]);
		} else {
			return null;
		}
	}
}
