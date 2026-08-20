export default function sitemap() {
  const baseUrl = "https://www.example.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/products`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() }
  ];
}
