import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function WCRM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>nHRMS WCRM — Internal Tool</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <iframe
        src="/wcrm.html"
        title="nHRMS WCRM"
        className="w-full h-screen border-0"
        allow="clipboard-write"
      />
    </>
  );
}
