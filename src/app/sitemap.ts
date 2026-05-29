import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://DOMAIN.com';
  return [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/locations`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/seo`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/google-business-profile`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/resources/first-90-days`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/resources/infrastructure-thesis`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/resources/operating-at-scale`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ].map(page => ({ ...page, lastModified: new Date() }));
}
