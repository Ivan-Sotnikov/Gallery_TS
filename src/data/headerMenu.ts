const headerMenu = [
  {
    header: "Main Page",
    link: "HomePage",
    icon: "mdi-home",
  },
  {
    header: "Galleries",
    icon: "mdi-file-image-outline",
    subtree: [
      { header: "New", link: "GalleriesPage", linkParam: { category: "new" } },
      {
        header: "Popular",
        link: "GalleriesPage",
        linkParam: { category: "popular" },
      },
      {
        header: "Hight resolution",
        link: "GalleriesPage",
        linkParam: { category: "hiRes" },
      },
    ],
  },
  {
    header: "Useful Links",
    icon: "mdi-link",
    subtree: [
      { header: "Relax", link: "https://arkadia.xyz", linkParam: {} },
      {
        header: "Github",
        link: "https://github.com/Ivan-Sotnikov",
        linkParam: {},
      },
      {
        header: "Page 404",
        link: "PNF",
        linkParam: {},
      },
    ],
  },
  {
    header: "About",
    icon: "mdi-information-variant",
    link: "About",
  },
];
export default headerMenu;
