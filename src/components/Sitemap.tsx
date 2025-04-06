
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Sitemap = () => {
  const location = useLocation();

  useEffect(() => {
    // If the user is requesting the sitemap.xml directly
    if (location.pathname === '/sitemap.xml') {
      window.location.href = '/sitemap.xml';
    }
  }, [location]);

  return null;
};

export default Sitemap;
