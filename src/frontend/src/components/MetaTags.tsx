import { useEffect } from "react";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  ogSiteName?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schemaLD?: object;
}

function setMeta(name: string, content: string, attr = "name") {
  let el = document.querySelector(
    `meta[${attr}="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

let schemaScriptEl: HTMLScriptElement | null = null;

export default function MetaTags({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogUrl,
  ogImage,
  ogSiteName,
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  schemaLD,
}: MetaTagsProps) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    if (canonical) setLink("canonical", canonical);

    if (ogTitle) setMeta("og:title", ogTitle, "property");
    if (ogDescription) setMeta("og:description", ogDescription, "property");
    if (ogType) setMeta("og:type", ogType, "property");
    if (ogUrl) setMeta("og:url", ogUrl, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    if (ogSiteName) setMeta("og:site_name", ogSiteName, "property");

    setMeta("twitter:card", twitterCard);
    if (twitterTitle) setMeta("twitter:title", twitterTitle);
    if (twitterDescription) setMeta("twitter:description", twitterDescription);
    if (twitterImage) setMeta("twitter:image", twitterImage);

    if (schemaLD) {
      if (!schemaScriptEl) {
        schemaScriptEl = document.createElement("script");
        schemaScriptEl.type = "application/ld+json";
        document.head.appendChild(schemaScriptEl);
      }
      schemaScriptEl.textContent = JSON.stringify(schemaLD);
    }
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogType,
    ogUrl,
    ogImage,
    ogSiteName,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    schemaLD,
  ]);

  return null;
}
