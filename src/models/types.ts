import { type } from "os";
import { VValidation } from "vuetify/lib/components";

export type CarouselGalleryItem = {
  galleryCategoryUrl: string;
  carouselName: string;
  carouselPreviews: [ImageFetch] | [];
};
export type ImageFetch = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export type GalleryItem = {
  category: string;
  images: [];
  currentPage: number;
  startFromPage: number;
};
export type CarouselGalleryArray = Array<CarouselGalleryItem>;

export type HeaderNavButton = {
  header: string;
  link?: string;
  linkParam?: { category: string };
  key?: number | string;
  subtree?: HeaderSubmenu;
  icon?: string;
  isDisable?: boolean;
};
export type HeaderSubmenu = Array<HeaderNavButton>;

export type ImageDialog = {
  isDialogVisible: boolean;
  url: string | undefined;
  title?: string;
  comments?: [];
};

export type UsersComment = {
  email: string;
  body: string;
  id: number;
};

export interface AuthForm {
  email: string;
  password: string;
}
export interface RegForm extends AuthForm {
  name: string;
}
