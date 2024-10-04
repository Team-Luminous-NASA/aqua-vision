import RotatingCard from "@/components/common/card/rotating/RotatingCard";
// import SunCloud from "@/components/common/earth/cloud/SunCloud";
import MovingEarth from "@/components/common/earth/moving/MovingEarth";
import ResultsSummary from "@/components/common/game/result/ResultSummary";

export default async function Home() {
  return (
    <main className="container mx-auto">
      {/* <h1>Hello</h1> */}
      <div className="hero_section">
        <div className="w-full flex-1 font-exo">
          {/* <SunCloud /> */}
          <h1 className="text-6xl font-bold font-exo">AQUA VISION</h1>
          <p className="text-2xl font-normal">
            Let&apos;s Explore the Oceans, & Earth&apos;s Atmosphere from PACE
          </p>
        </div>
        <div className="flex-1 grid place-content-center">
          <MovingEarth />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <RotatingCard />
      <br />
      <br />
      <ResultsSummary />
    </main>
  );
}
