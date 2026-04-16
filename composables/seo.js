export function useSeo({ title, description, keywords, path = "", ogType = "website", breadcrumbs = [] }) {
  const config = useRuntimeConfig();
  const baseUrl = config.public.appUrl;
  const siteName = "Islam Samy";
  const twitterHandle = "@islacks214";
  const ogImage = `${baseUrl}/images/profile.jpg`;
  const canonicalUrl = path ? `${baseUrl}${path}` : baseUrl;

  const meta = [
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: siteName },
    { name: "theme-color", content: "#0f172a" },
    // OG
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${siteName} — Software Engineer & DevOps` },
    { property: "og:site_name", content: siteName },
    { property: "og:locale", content: "en_US" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:site", content: twitterHandle },
    { name: "twitter:creator", content: twitterHandle },
  ];

  const script = [];

  if (breadcrumbs.length) {
    script.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${baseUrl}${crumb.path}`,
        })),
      }),
    });
  }

  useHead({
    title,
    meta,
    link: [{ rel: "canonical", href: canonicalUrl }],
    script,
  });
}
