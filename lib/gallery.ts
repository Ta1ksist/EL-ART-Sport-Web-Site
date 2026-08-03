import cloudinary from './cloudinary';

export interface GalleryImage {
  url: string;
  width: number;
  height: number;
  publicId: string;
}

export async function getProjectGallery(slug: string): Promise<GalleryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${slug}`)
      .max_results(100)
      .execute();

    const resources = result.resources || [];

    const photoResources = resources.filter((resource: any) => {
      const filename = resource.public_id.split('/').pop() || '';
      return !filename.startsWith('drawings');
    });
    const sorted = photoResources.sort((a: any, b: any) => {
      const numA = parseInt(a.public_id.split('/').pop(), 10);
      const numB = parseInt(b.public_id.split('/').pop(), 10);

      if (Number.isNaN(numA) && Number.isNaN(numB)) {
        return a.public_id.localeCompare(b.public_id);
      }
      if (Number.isNaN(numA)) return 1;
      if (Number.isNaN(numB)) return -1;

      return numA - numB;
    });

    return sorted.map((resource: any) => ({
      url: resource.secure_url.replace('/upload/', '/upload/f_auto,q_auto/'),
      width: resource.width,
      height: resource.height,
      publicId: resource.public_id,
    }));
  } catch (error) {
    console.error(`Ошибка загрузки галереи для ${slug}:`, error);
    return [];
  }
}

export async function getProjectDrawings(slug: string): Promise<GalleryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${slug}`)
      .max_results(100)
      .execute();

    const resources = result.resources || [];

    const drawingResources = resources.filter((resource: any) => {
      const filename = resource.public_id.split('/').pop() || '';
      return filename.startsWith('drawings');
    });

    const sorted = drawingResources.sort((a: any, b: any) => {
      const nameA = a.public_id.split('/').pop() || '';
      const nameB = b.public_id.split('/').pop() || '';

      const numA = parseInt(nameA.replace(/\D/g, ''), 10);
      const numB = parseInt(nameB.replace(/\D/g, ''), 10);

      if (Number.isNaN(numA) && Number.isNaN(numB)) {
        return nameA.localeCompare(nameB);
      }
      if (Number.isNaN(numA)) return 1;
      if (Number.isNaN(numB)) return -1;

      return numA - numB;
    });

    return sorted.map((resource: any) => ({
      url: resource.secure_url.replace('/upload/', '/upload/f_auto,q_auto/'),
      width: resource.width,
      height: resource.height,
      publicId: resource.public_id,
    }));
  } catch (error) {
    console.error(`Ошибка загрузки чертежей для ${slug}:`, error);
    return [];
  }
}
