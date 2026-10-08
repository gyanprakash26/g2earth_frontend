import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
  keywords,
}: SeoProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image ?? `${SITE_CONFIG.url}/og-image.png`;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    keywords,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [ogImage],
    },
  };
}

export function buildProductMetadata(product: {
  name: string;
  shortDescription?: string;
  slug: string;
  images: { url: string; alt: string }[];
}): Metadata {
  return buildMetadata({
    title: product.name,
    description: product.shortDescription ?? `Buy ${product.name} online at G2Earth. Best quality, fast delivery.`,
    path: `/product/${product.slug}`,
    image: product.images[0]?.url,
  });
}

export function buildCategoryMetadata(category: {
  name: string;
  description?: string;
  slug: string;
  image?: { url: string };
}): Metadata {
  return buildMetadata({
    title: category.name,
    description: category.description ?? `Shop ${category.name} at G2Earth. Wide selection, best prices.`,
    path: `/category/${category.slug}`,
    image: category.image?.url,
  });
}
