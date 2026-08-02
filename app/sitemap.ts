import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://твой-домен.ru';

  const projectUrls = getAllProjects()
    .filter((p) => !p.isSoon)
    .map((p) => ({
      url: `${baseUrl}/Projects/${p.slug}`,
      lastModified: new Date(),
    }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/Projects`, lastModified: new Date() },
    { url: `${baseUrl}/Services`, lastModified: new Date() },
    { url: `${baseUrl}/AboutUs`, lastModified: new Date() },
    { url: `${baseUrl}/Contact`, lastModified: new Date() },
    ...projectUrls,
  ];
}