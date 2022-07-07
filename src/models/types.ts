export type carouselGallery={
  galleryCategory:string;
  galleryPreview?:[imageFetch] | []
}
export type imageFetch={
  albumId: number
    id: number 
    title: string
    url: string
    thumbnailUrl: string
}