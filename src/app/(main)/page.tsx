import ComicsSection from "@/components/common/comics/ComicsSection";
import SunCloud from "@/components/common/earth/cloud/SunCloud";
import MovingEarth from "@/components/common/earth/moving/MovingEarth";
import GallerySection from "@/components/common/gallery/GallerySection";
import GamesSection from "@/components/common/game/lists/GameSection";
import NovelsSection from "@/components/common/novel/NovelSection";

export default async function Home() {
  return (
    <main className="container mx-auto my-36">
      <div className="hero_section">
        <div className="w-full">
          <h1 className="text-6xl font-bold font-bungee">AQUA VISION</h1>
          <p className="text-2xl font-normal font-bungee">
            Let&apos;s Explore the Oceans, & Earth&apos;s Atmosphere from PACE
          </p>
          <SunCloud />
        </div>
        <div className="grid place-content-center">
          <MovingEarth />
        </div>
      </div>
      <div>
        <NovelsSection />
      </div>
      <div>
        <GamesSection />
      </div>
      <div>
        <ComicsSection />
      </div>
      <div>
        <GallerySection />
      </div>
    </main>
  );
}
