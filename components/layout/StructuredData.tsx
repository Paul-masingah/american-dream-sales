/**
 * Structured Data (JSON-LD) for SEO
 * Implements Schema.org markup for American Dream
 */

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ShoppingCenter",
        "@id": "https://americandream.com/#shopping-center",
        "name": "American Dream",
        "description": "America's second-largest shopping mall featuring 450+ stores, Nickelodeon Universe Theme Park, DreamWorks Water Park, and world-class dining.",
        "url": "https://americandream.com",
        "logo": "https://americandream.com/images/logo.png",
        "image": "https://americandream.com/images/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 American Dream Way",
          "addressLocality": "East Rutherford",
          "addressRegion": "NJ",
          "postalCode": "07073",
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.8133",
          "longitude": "-74.0694",
        },
        "telephone": "+1-201-555-0100",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "21:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00",
            "closes": "22:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "11:00",
            "closes": "20:00",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "reviewCount": "12500",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://americandream.com/#organization",
        "name": "American Dream",
        "url": "https://americandream.com",
        "logo": "https://americandream.com/images/logo.png",
        "sameAs": [
          "https://twitter.com/americandream",
          "https://www.facebook.com/americandream",
          "https://www.instagram.com/americandream",
          "https://www.linkedin.com/company/american-dream",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-201-555-0100",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["English", "Spanish"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://americandream.com/#website",
        "url": "https://americandream.com",
        "name": "American Dream",
        "description": "Premier retail and entertainment destination featuring 450+ stores, world-class attractions, and unlimited partnership opportunities.",
        "publisher": {
          "@id": "https://americandream.com/#organization",
        },
      },
      {
        "@type": "TouristAttraction",
        "@id": "https://americandream.com/#attraction",
        "name": "American Dream Entertainment Destination",
        "description": "The First-Ever Entertainment Destination Like This featuring Nickelodeon Universe Theme Park, DreamWorks Water Park, Big Snow America, and more.",
        "url": "https://americandream.com",
        "image": "https://americandream.com/images/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 American Dream Way",
          "addressLocality": "East Rutherford",
          "addressRegion": "NJ",
          "postalCode": "07073",
          "addressCountry": "US",
        },
        "touristType": ["Families", "Shopping Enthusiasts", "Entertainment Seekers"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
