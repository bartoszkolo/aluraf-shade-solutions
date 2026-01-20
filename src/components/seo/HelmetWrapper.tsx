import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { generateTitle } from '@/lib/seo';

interface HelmetWrapperProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishDate?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const HelmetWrapper = ({
  title,
  description,
  keywords,
  image = '/lovable-uploads/0748ff93-80ad-4145-a425-eff5345ea9ac.png',
  type = 'website',
  publishDate,
  modifiedTime,
  noindex = false
}: HelmetWrapperProps) => {
  const location = useLocation();
  const fullTitle = generateTitle(title);
  const url = `${window.location.origin}${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pl_PL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@aluraf_pl" />

      {/* Article specific */}
      {type === 'article' && publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Product specific */}
      {type === 'product' && (
        <meta property="product:availability" content="in stock" />
      )}
    </Helmet>
  );
};

export default HelmetWrapper;
