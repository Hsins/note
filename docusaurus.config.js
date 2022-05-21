// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hote',
  tagline: 'Dinosaurs are cool',

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Hsins',
  projectName: 'note',

  i18n: {
    defaultLocale: 'zh-hant',
    locales: ['zh-hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          path: 'pages',
          routeBasePath: '/',
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
        },
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: '須臾所學',
          blogDescription: 'Blog',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hote',
        logo: {
          alt: 'Hote Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '理論知識',
            type: 'docSidebar',
            sidebarId: 'disciplines',
            position: 'left',
          },
          {
            label: '開發實務',
            type: 'docSidebar',
            sidebarId: 'developments',
            position: 'left',
          },
          {
            label: '讀書筆記',
            to: '/book',
            position: 'left',
            activeBaseRegex: `/book/`,
          },
          {
            label: '課程筆記',
            to: '/course',
            position: 'left',
            activeBaseRegex: `/course/`,
          },
          {
            label: '論文筆記',
            to: '/paper',
            position: 'left',
            activeBaseRegex: `/paper/`,
          },
          { label: '須臾所學', to: '/blog', position: 'left' },
          {
            className: 'header-github-link',
            href: 'https://github.com/Hsins/note',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Hsins.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-book',
        path: 'docs-book',
        routeBasePath: 'book',
        sidebarPath: require.resolve('./src/sidebars/book.js'),
        editUrl: 'https://github.com/hsins/note/tree/docs2/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-course',
        path: 'docs-course',
        routeBasePath: 'course',
        sidebarPath: require.resolve('./src/sidebars/course.js'),
        editUrl: 'https://github.com/hsins/note/tree/docs2/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-paper',
        path: 'docs-paper',
        routeBasePath: 'paper',
        sidebarPath: require.resolve('./src/sidebars/paper.js'),
        editUrl: 'https://github.com/hsins/note/tree/docs2/',
      },
    ],
  ],
};

module.exports = config;
