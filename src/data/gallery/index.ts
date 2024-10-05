export interface IGallery {
  imgUrl: string;
  alt: string;
  title: string;
  description: string;
  newsLink?: string;
}

export const galleryList: IGallery[] = [
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/gallery/g-1.png",
    alt: "First Light",
    title: "[10-Apr-24]",
    description: 'PACE "First Light" Composite. Credit: NASA.',
    newsLink: "https://www.nasa.gov",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/gallery/g-2.jpeg",
    alt: "Atop Falcon 9",
    title: "[05-Feb-24]",
    description: " PACE Atop Falcon 9 Raised to Launch Position. Credit: NASA.",
    newsLink: "https://www.nasa.gov",
  },
  {
    imgUrl:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/gallery/g-3.jpeg",
    alt: "Propellant Loading",
    title: "[05-Jan-24]",
    description:
      "PACE Propellant Loading and Pressurization Team. Credit: NASA.",
    newsLink: "https://www.nasa.gov",
  },
];
