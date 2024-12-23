// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Taskon Docs",
  tagline: "Taskon User Guide Docs",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.taskon.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TaskOn", // Usually your GitHub org/user name.
  projectName: "TaskOn Docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Taskon-xyz/taskon-doc/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/Taskon-xyz/taskon-doc/edit/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/favicon.png",
      navbar: {
        title: "Taskon Docs",
        logo: {
          alt: "Taskon Docs logo",
          src: "img/favicon.png",
          href: "/docs/To%20C%20Tutorial/Intro",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "User Docs",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Taskon-xyz/taskon-doc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/To%20C%20Tutorial/Intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/taskonxyz",
              },
              {
                label: "Discord",
                href: "https://discord.gg/tjszFr7wHz",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/doc",
              // },
              {
                label: "GitHub",
                href: "https://github.com/Taskon-xyz/taskon-doc",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TaskOn, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // ...
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",

      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",

      //   indexName: "YOUR_INDEX_NAME",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",

      //   //... other Algolia params
      // },
    }),
};

module.exports = config;
