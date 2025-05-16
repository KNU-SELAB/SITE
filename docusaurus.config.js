// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Software Testing Lab.',
  tagline: '경북대학교 소프트웨어 테스팅 연구실',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, 
        // {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id:'Domestic-Conference',
        routeBasePath:'Domestic-Conference',
        path:'./list/domestic-conference',
        blogTitle:'국내 학술대회',
        blogDescription:'국내 학술대회 관련',
        blogSidebarCount:5,
        postsPerPage:10,
        feedOptions:{
          type:['rss','atom'],
          title:'',
          copyright: `Copyright © ${new Date().getFullYear()} KNU ESELAB.`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id:'Internatinal-Conference',
        routeBasePath:'International-Conference',
        path:'./list/international-conference',
        blogTitle:'국제 학술대회',
        blogDescription:'국제 학술대회 관련',
        blogSidebarCount:5,
        postsPerPage:10,
        feedOptions:{
          type:['rss','atom'],
          title:'',
          copyright: `Copyright © ${new Date().getFullYear()} KNU ESELAB.`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id:'Domestic-Journal',
        routeBasePath:'Domestic-Journal',
        path:'./list/domestic-journal',
        blogTitle:'국내 저널',
        blogDescription:'국내 저널 관련',
        blogSidebarCount:5,
        postsPerPage:10,
        feedOptions:{
          type:['rss','atom'],
          title:'',
          copyright: `Copyright © ${new Date().getFullYear()} KNU ESELAB.`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id:'International-Journal',
        routeBasePath:'International-Journal',
        path:'./list/international-journal',
        blogTitle:'국제 저널',
        blogDescription:'국제 저널 관련',
        blogSidebarCount:5,
        postsPerPage:10,
        feedOptions:{
          type:['rss','atom'],
          title:'',
          copyright: `Copyright © ${new Date().getFullYear()} KNU ESELAB.`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id:'Patent',
        routeBasePath:'Patent',
        path:'./list/patent',
        blogTitle:'특허',
        blogDescription:'특허 관련',
        blogSidebarCount:5,
        postsPerPage:10,
        feedOptions:{
          type:['rss','atom'],
          title:'',
          copyright: `Copyright © ${new Date().getFullYear()} KNU ESELAB.`,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id:'Course',
        routeBasePath:'Course',
        path:'./list/course',
        blogTitle:'강의',
        blogDescription:'강의 관련',
        blogSidebarCount:5,
        postsPerPage:10,
        feedOptions:{
          type:['rss','atom'],
          title:'',
          copyright: `Copyright © ${new Date().getFullYear()} KNU ESELAB.`,
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'STLAB.',
        logo: {
          alt: 'KNU_STLAB',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KNU STLAB.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
