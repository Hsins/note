const utils = require('./libs/utils.js')

module.exports = {
  base: '/Udemy-Notes/',
  title: 'Learn',
  description: '',
  head: [
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css" }],
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" }],
    ['link', { rel: "shortcut icon", type: "image/png", size: "any", href: "/favicon.png" }],
    ['link', { rel: "icon", type: "image/svg+xml", size: "any", href: "/favicon.svg" }]
  ],

  theme: 'antdocs',
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '開放課程', link: '/Course/' },
      { text: '教育平台', items: [
        { text: 'iMOOC', link: '/iMOOC/' },
        { text: 'Lynda', link: '/Lynda/' },
        { text: 'Udemy', link: '/Udemy/' },
        { text: 'Coursera', link: '/Coursera/' },
        { text: 'GeekTime', link: '/GeekTime/' },
        { text: 'Pluralsight', link: '/Pluralsight/' }]}
    ],
    sidebar: utils.sidebars,
    lastUpdated: 'Last Updated',
    Host: 'https://hsins.github.io/',
    social: {
      LikerID: 'hsins59417',
    }
  },

  markdown: {
    extendMarkdown: md => {
      md.use(require("@iktakahiro/markdown-it-katex"));
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-imsize'));
      md.use(require('markdown-it-abbr'));
    }
  },

  // Disable the svg in external links
  // REF: https://github.com/vuejs/vuepress/pull/614
  chainMarkdown(config) {
    const { PLUGINS } = require('@vuepress/markdown');
    const originalLinkPlugin = require('@vuepress/markdown/lib/link.js');

    config.plugins.delete(PLUGINS.CONVERT_ROUTER_LINK);

    const linkPlugin = function(md) {
      const result = originalLinkPlugin.apply(this, arguments);
      const close = md.renderer.rules.link_close;
      md.renderer.rules.link_close = function() {
        return close.apply(this, arguments).replace('<OutboundLink/>', '');
      };
      return result;
    };

    config.plugin(PLUGINS.CONVERT_ROUTER_LINK).use(linkPlugin, [
      {
        // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ]);
  },

  plugins: [
    // ['mathjax', { target: 'svg' }],
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/google-analytics', { 'ga': 'UA-157820794-2' }],
    ['vuepress-plugin-container', {
      type: 'callout',
      before: info => `<div class="callout"><p class="title">${info}</p>`,
      after: '</div>'}],
    ['vuepress-plugin-element-tabs']
  ]
};

