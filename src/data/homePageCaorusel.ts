import type { CarouselGalleryArray } from "@/models/types";

const caoruselItems: CarouselGalleryArray = [
  {
    galleryCategoryUrl: "new",
    carouselName: "New Galleries",
    carouselPreviews: await fetch(
      "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5"
    ).then((r) => r.json()),
  },
  {
    galleryCategoryUrl: "popular",
    carouselName: "Popular Galleries",
    carouselPreviews: await fetch(
      "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5"
    ).then((r) => r.json()),
  },
  {
    galleryCategoryUrl: "hiRes",
    carouselName: "High resolution galleries",
    carouselPreviews: await fetch(
      "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5"
    ).then((r) => r.json()),
  },
];
export default caoruselItems;
