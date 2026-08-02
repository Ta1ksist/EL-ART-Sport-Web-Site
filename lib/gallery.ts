// import cloudinary from './cloudinary';

// export interface GalleryImage {
//   url: string;
//   width: number;
//   height: number;
//   publicId: string;
// }

// export async function getProjectGallery(slug: string): Promise<GalleryImage[]> {
//   try {
//     const result = await cloudinary.search
//       .expression(`folder:${slug}`)
//       .max_results(100)
//       .execute();

//     const sorted = result.resources.sort((a: any, b: any) => {
//       const numA = parseInt(a.public_id.split('/').pop(), 10);
//       const numB = parseInt(b.public_id.split('/').pop(), 10);

//       if (Number.isNaN(numA) && Number.isNaN(numB)) {
//         return a.public_id.localeCompare(b.public_id);
//       }
//       if (Number.isNaN(numA)) return 1;
//       if (Number.isNaN(numB)) return -1;

//       return numA - numB;
//     });

//     return sorted.map((resource: any) => ({
//       url: resource.secure_url,
//       width: resource.width,
//       height: resource.height,
//       publicId: resource.public_id,
//     }));
//   } catch (error) {
//     console.error(`Ошибка загрузки галереи для ${slug}:`, error);
//     return [];
//   }
// }


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

    const sorted = result.resources.sort((a: any, b: any) => {
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
      // f_auto — автоформат (WebP/AVIF для поддерживающих браузеров)
      // q_auto — автокачество (Cloudinary сам подбирает баланс размер/качество)
      // w_2000 — не отдавать оригинал в разрешении больше 2000px, если он крупнее
      url: resource.secure_url.replace('/upload/', '/upload/f_auto,q_auto,w_2000/'),
      width: resource.width,
      height: resource.height,
      publicId: resource.public_id,
    }));
  } catch (error) {
    console.error(`Ошибка загрузки галереи для ${slug}:`, error);
    return [];
  }
}