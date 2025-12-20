interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
  url?: string;
}

const ArticleSchema = ({
  title,
  description,
  datePublished,
  dateModified,
  image = 'https://nhrms.com/opengraph-image.png',
  authorName = 'nHRMS Research Team',
  url,
}: ArticleSchemaProps) => {
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://nhrms.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'nHRMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nhrms.com/favicon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.article-summary', '.executive-summary'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;
