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
  url: 'https://KNU-STLAB.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SITE/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KNU-STLAB', // Usually your GitHub org/user name.
  projectName: 'SITE', // Usually your repo name.

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
        routeBasePath:'Conference/Domestic',
        path:'./list/domestic-conference',
        blogTitle:'국내 학술대회',
        blogDescription:'국내 학술대회 관련',
        blogSidebarCount:10,
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
        id:'International-Conference',
        routeBasePath:'Conference/International',
        path:'./list/international-conference',
        blogTitle:'국제 학술대회',
        blogDescription:'국제 학술대회 관련',
        blogSidebarCount:10,
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
        routeBasePath:'Journal/Domestic',
        path:'./list/domestic-journal',
        blogTitle:'국내 저널',
        blogDescription:'국내 저널 관련',
        blogSidebarCount:10,
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
        routeBasePath:'Journal/International',
        path:'./list/international-journal',
        blogTitle:'국제 저널',
        blogDescription:'국제 저널 관련',
        blogSidebarCount:10,
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
        blogSidebarCount:10,
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
        blogSidebarCount:10,
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
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'STLAB',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/Course', label: 'Course', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Conference',
            items: [
              {
                label: 'Domestic',
                to: '/Conference/Domestic',
              },{
                label: 'International',
                to: '/Conference/Domestic',
              },
            ],
          },{
            title: 'Journal',
            items: [
              {
                label: 'Domestic',
                to: '/Journal/Domestic',
              },{
                label: 'International',
                to: '/Journal/International',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
              {
                label: 'Courses',
                to: '/Course',
              },
              {
                label: 'Github',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Professor',
                href: 'http://gscse.knu.ac.kr/bbs/board.php?bo_table=sub2_1&wr_id=21',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Mail to Lab. Manager',
                href: 'mailto:labmanager@gmail.com',
              },
              {
                label: 'Mail to Professor',
                href: 'Mailto:professor@gmail.com',
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
