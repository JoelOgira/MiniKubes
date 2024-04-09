export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        // sitemap: 'https://oecsda.org/sitemap.xml',
    }
}