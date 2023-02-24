// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');


/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'nBold Hosting',
  tagline: 'nBold Hosting',
  url: 'https://hosting.nbold.co',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'favicon.ico',

  trailingSlash: false, // Prevent GitHub pages to add slash

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'contents',
          routeBasePath: '/',
          sidebarPath: require.resolve('./src/js/sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/nboldhq/hosting/tree/main/',
          remarkPlugins: [mdxMermaid],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleAnalytics: {
        //   trackingID: 'UA-5688830-15',
        //   anonymizeIP: true,
        // },
        // See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap#filename
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      }),
    ]
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        // fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          // {
          //   to: '/api',
          //   from: '/explorer2',
          // },
          // // Redirect from multiple old paths to the new path
          // {
          //   to: '/docs/newDoc2',
          //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          // },
        ],
        // createRedirects (existingPath) {
        //   if (existingPath.includes('/community')) {
        //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //     return [
        //       existingPath.replace('/community', '/docs/team'),
        //       existingPath.replace('/community', '/docs/support'),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
      },
    ],
  ],

  scripts: [
    {
      src: '/js/intercom.js',
      async: true,
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'picto.png',
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true
      // },
      navbar: {
        title: 'Hosting',
        logo: {
          alt: 'nBold logo',
          src: 'logo.png',
          srcDark: 'logo_dark.png',
          width: 115,
          height: 32,
          href: '/',
          target: '_self'
        },
        items: [],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'nBold logo',
          src: 'logo.png',
          width: 115,
          height: 32,
          href: 'https://nbold.co',
          target: '_blank'
        },
        links: [
          {
            title: 'Table of contents',
            items: [],
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nbold',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nboldco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://nbold.co/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nboldhq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()
          } SalesTim SAS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
