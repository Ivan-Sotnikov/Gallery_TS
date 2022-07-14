import type { HeaderSubmenu } from "@/models/types";

const headerMenu: HeaderSubmenu = [
  {
    header: "Main Page",
    link: "HomePage",
    icon: "mdi-home",
    key: "one",
  },
  {
    header: "Galleries",
    icon: "mdi-file-image-outline",
    key: "two",
    subtree: [
      { header: "New", link: "GalleriesPage", linkParam: { category: "new" } },
      {
        header: "Popular",
        link: "GalleriesPage",
        linkParam: { category: "popular" },
      },
      {
        header: "High resolution",
        link: "GalleriesPage",
        linkParam: { category: "hiRes" },
      },
    ],
  },
  {
    header: "Useful Links",
    icon: "mdi-link",
    key: "three",
    subtree: [
      { header: "Relax", link: "https://arkadia.xyz" },
      {
        header: "Github",
        link: "https://github.com/Ivan-Sotnikov",
      },
      {
        header: "Page 404",
        link: "PNF",
      },
    ],
  },
  {
    header: "About",
    icon: "mdi-information-variant",
    link: "About",
    key: "four",
  },
];
export default headerMenu;
