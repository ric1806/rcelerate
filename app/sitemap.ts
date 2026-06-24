import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rcelerate.co',
      lastModified: new Date('2026-06-23'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
