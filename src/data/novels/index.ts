export interface INovel {
  id: string;
  title: string;
  image: string;
  isFree: boolean;
  novelUrl?: string;
}

export const novelList: INovel[] = [
  {
    id: "1",
    title: "Rain and PACE",
    image:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/novels/novel-1.png",
    isFree: true,
  },
  {
    id: "2",
    title: "The Martian",
    image:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/novels/novel-2.png",
    isFree: false,
  },
  {
    id: "3",
    title: "The Right Stuff",
    image:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/novels/novel-3.png",
    isFree: false,
  },
];
