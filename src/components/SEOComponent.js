import React from 'react';
import { Helmet } from 'react-helmet';

const SEOComponent = ({ title, description, keywords, canonicalUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonicalUrl} />
    <script type="application/ld+json">
      {`
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "${title}",
          "description": "${description}"
        }
      `}
    </script>
  </Helmet>
);

export default SEOComponent;