
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Sitemap = () => {
  const location = useLocation();

  useEffect(() => {
    // If the user is requesting the sitemap.xml directly
    if (location.pathname === '/sitemap.xml') {
      window.location.href = '/sitemap.xml';
    }
    
    // Add structured data for organization
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'nHRMS',
      'url': 'https://nhrms.com',
      'logo': 'https://nhrms.com/logo.png',
      'description': 'Strategic 360 Degree HR Management Consulting Firm',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-314-485-4747',
        'contactType': 'customer service'
      },
      'sameAs': [
        'https://linkedin.com/company/nhrms',
        'https://twitter.com/nhrms'
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      // Clean up when component unmounts
      document.head.removeChild(script);
    };
  }, [location]);

  return null;
};

export default Sitemap;
