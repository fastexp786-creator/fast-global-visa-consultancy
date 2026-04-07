import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website'
}) => {
  const siteTitle = 'Fast Global Consultancy (Pvt) Ltd'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Fast Global Consultancy (Pvt) Ltd" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Rawalpindi, Pakistan" />
      <meta name="ICBM" content="33.5651;73.0169" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Fast Global Consultancy (Pvt) Ltd",
          "url": "https://visaconsultant.fastjobcareer.com",
          "logo": "https://visaconsultant.fastjobcareer.com/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6th Road",
            "addressLocality": "Rawalpindi",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-300-1234567",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/fastglobalconsultancy",
            "https://www.instagram.com/fastglobalconsultancy"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEOHelmet
