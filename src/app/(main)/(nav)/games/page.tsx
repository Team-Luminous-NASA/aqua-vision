import GamesSection from "@/components/common/game/lists/GameSection";
import PageTitle from "@/components/common/page_title/PageTitle";
import React from "react";

const GamesPage = () => {
  return (
    <div>
      <PageTitle pageTitle="Games" />
      <div className="p-5 bg-white/10 backdrop-blur-sm">
        <GamesSection />
      </div>
    </div>
  );
};

export default GamesPage;
