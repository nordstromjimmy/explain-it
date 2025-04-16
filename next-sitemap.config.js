/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.explainit.io/",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
