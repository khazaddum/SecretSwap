module.exports = {
  title: "SecretSwap",
  description: "Privacy is a Public Good",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "https://secretswap.io" },
      { text: "Blog", link: "https://blog.scrt.network" },
      { text: "Chat", link: "https://chat.scrt.network" },
      { text: "Forum", link: "https://forum.scrt.network" },
      { text: "Twitter", link: "https://twitter.com/SecretSwap" },
      { text: "Github", link: "https://github.com/enigmampc/SecretNetwork" },
    ],
    sidebar: [
      {
        title: "SecretSwap Documentation", // required
        path: "/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 0, // optional, defaults to 1
        children: [
          "/components",
          "/encryption-specs",
          "/transactions",
          "/governance",
          "/sgx",
        ],
      },
      {
        title: "Secret Wiki",
        path: "https://learn.scrt.network/",
      },
    ],
  },
};
