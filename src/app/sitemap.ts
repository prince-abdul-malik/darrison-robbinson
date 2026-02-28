import { MetadataRoute } from 'next'
import { getProperties } from '@/lib/properties'

/**
 * Generates a dynamic sitemap for the application.
 * It includes the home page and individual property listing pages.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://darrionsellscalabasas.com'

  // Fetch all properties to include them in the sitemap
  const properties = await getProperties()
  
  const propertyUrls = properties.map((property) => ({
    url: `${baseUrl}/properties/${property.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    ...propertyUrls,
  ]
}
