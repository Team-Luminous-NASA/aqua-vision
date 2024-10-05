export interface IComics {
  id: number;
  imgUrl: string;
  alt: string;
  title: string;
  description: string;
  rating?: number;
  dwnLink?: string;
  free: boolean;
}

export const comicsList: IComics[] = [
  {
    id: 1,
    imgUrl:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/comics/c1.jpeg",
    alt: "Superman vs. Batman",
    title: "Superman vs. Batman Comics",
    description: "Superman vs. Batman Comics.",
    dwnLink: "https://www.nasa.gov",
    rating: 4.0,
    free: true,
  },
  {
    id: 2,
    imgUrl:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/comics/c2.jpeg",
    alt: "Phytoplankton Chronicles",
    title: "Phytoplankton Chronicles: The Silent Battle",
    description: "Phytoplankton Chronicles: The Silent Battle.",
    dwnLink: "https://www.nasa.gov",
    rating: 4.5,
    free: false,
  },
  {
    id: 3,
    imgUrl:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/comics/c3.jpeg",
    alt: "Comicsense Book",
    title: "Comicsense Book: The Glittered Glass",
    description: "Comicsense Book: The Glittered Glass.",
    dwnLink: "https://www.nasa.gov",
    rating: 5.0,
    free: false,
  },
];
