export interface IGame {
  id: string;
  title: string;
  image: string;
  isFree: boolean;
  gameUrl?: string;
}

export const gameList: IGame[] = [
  {
    id: "1",
    title: "Chronos: Before The Ashes Torrent Download (v258941)",
    image:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/games/game-1.jpeg",
    isFree: true,
  },
  {
    id: "2",
    title: "Chronos: Before The Ashes Torrent Download (v258941)",
    image:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/games/game-2.jpeg",
    isFree: false,
  },
  {
    id: "3",
    title: "Chronos: Before The Ashes Torrent Download (v258941)",
    image:
      "https://cdn.jsdelivr.net/gh/jashezan/aqua-vision@main/public/games/game-3.jpeg",
    isFree: false,
  },
];
