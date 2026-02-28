import { MetadataRoute } from 'next'

/**
 * Generates the robots.txt file for the application.
 * Configures crawling rules and points to the dynamic sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Prevent search engines from crawling the admin dashboard
    },
    sitemap: 'https://darrionsellscalabasas.com/sitemap.xml',
  }
}
