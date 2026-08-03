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
//       url: resource.secure_url.replace('/upload/', '/upload/f_auto,q_auto,w_2000/'),
//       width: resource.width,
//       height: resource.height,
//       publicId: resource.public_id,
//     }));
//   } catch (error) {
//     console.error(`Ошибка загрузки галереи для ${slug}:`, error);
//     return [];
//   }
// }

// export async function getProjectDrawings(slug: string): Promise<GalleryImage[]> {
//   try {
//     const result = await cloudinary.search
//       .expression(`folder:${slug}`)
//       .max_results(200)
//       .execute();

//     const resources = result.resources || [];

//     const drawingResources = resources.filter((resource: any) => {
//       const filename = resource.public_id.split('/').pop();
//       return filename.startsWith('drawings');
//     });

//     const sorted = drawingResources.sort((a: any, b: any) => {
//       const nameA = a.public_id.split('/').pop();
//       const nameB = b.public_id.split('/').pop();

//       const numA = parseInt(nameA.replace(/\D/g, ''), 10);
//       const numB = parseInt(nameB.replace(/\D/g, ''), 10);

//       if (Number.isNaN(numA) && Number.isNaN(numB)) {
//         return nameA.localeCompare(nameB);
//       }
//       if (Number.isNaN(numA)) return 1;
//       if (Number.isNaN(numB)) return -1;

//       return numA - numB;
//     });

//     return sorted.map((resource: any) => ({
//       url: resource.secure_url.replace('/upload/', '/upload/f_auto,q_auto/'),
//       width: resource.width,
//       height: resource.height,
//       publicId: resource.public_id,
//     }));
//   } catch (error) {
//     console.error(`Ошибка загрузки чертежей для папки ${slug}:`, error);
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

// 1. ФУНКЦИЯ ДЛЯ ГАЛЕРЕИ (Берет ТОЛЬКО обычные фото 1.jpg, 2.jpg и пропускает чертежи)
export async function getProjectGallery(slug: string): Promise<GalleryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${slug}`)
      .max_results(100)
      .execute();

    const resources = result.resources || [];

    // Фильтруем: Исключаем файлы, имя которых начинается на 'drawings'
    const photoResources = resources.filter((resource: any) => {
      const filename = resource.public_id.split('/').pop() || '';
      return !filename.startsWith('drawings');
    });

    // Сортируем оставшиеся файлы (1.jpg, 2.jpg и т.д.)
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

// 2. ФУНКЦИЯ ДЛЯ ЧЕРТЕЖЕЙ (Берет ТОЛЬКО файлы drawings1.jpg, drawings2.jpg)
export async function getProjectDrawings(slug: string): Promise<GalleryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`folder:${slug}`)
      .max_results(100)
      .execute();

    const resources = result.resources || [];

    // Фильтруем: Берем только те файлы, имя которых НАЧИНАЕТСЯ на 'drawings'
    const drawingResources = resources.filter((resource: any) => {
      const filename = resource.public_id.split('/').pop() || '';
      return filename.startsWith('drawings');
    });

    // Сортируем чертежи по номерам (удаляем буквы 'drawings', чтобы правильно сравнить числа 2 и 10)
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
