// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suraj Jha Blogs',
  tagline: 'Dinosaurs are cool',
  url: 'https://jhasuraj.com',
  baseUrl: '/blog',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icons/icon32.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jhasuraj01', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML:  '(function(c,l,a,r,i,t,y){\n' +
                  '    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n' +
                  '    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n' +
                  '    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n' +
                  '})(window, document, "clarity", "script", "h8s7eoq3zy");',
    },
  ],
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jhasuraj01/blog/tree/main/',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [
              [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true, converters: ['yarn', 'pnpm'] }]
          ],
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/jhasuraj01/blog/tree/main/',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true, converters: ['yarn', 'pnpm'] }]
          ],
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
        title: 'Suraj Jha Blogs',
        logo: {
          alt: 'My Site Logo',
          src: 'https://jhasuraj.com/icons/icon48.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'algorithms/intro',
            position: 'left',
            label: 'Algorithms',
          },
          {
            type: 'doc',
            docId: 'data-structures/intro',
            position: 'left',
            label: 'Data Structures',
          },
          {
            href: 'https://github.jhasuraj.com/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://linkedin.jhasuraj.com/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://jhasuraj.com/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Coding Profiles',
          //   items: [
          //     {
          //       label: 'LeetCode',
          //       href: 'https://leetcode.jhasuraj.com',
          //     },
          //     {
          //       label: 'CodeChef',
          //       href: 'https://codechef.jhasuraj.com',
          //     },
          //     {
          //       label: 'Codeforces',
          //       href: 'https://codeforces.jhasuraj.com',
          //     },
          //   ],
          // },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.jhasuraj.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.jhasuraj.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Projects',
                href: 'https://jhasuraj.com/projects',
              },
              {
                label: 'GitHub',
                href: 'https://github.jhasuraj.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - ${new Date().getFullYear() + 1} Suraj Jha. All Right Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ 'solidity' ],
      },
    }),
};

module.exports = config;
