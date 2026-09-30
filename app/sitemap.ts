import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://bezdepcasino1.vercel.app/', changeFrequency: 'monthly', priority: 1 }]
}
