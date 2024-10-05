import NovelsSection from "@/components/common/novel/NovelSection";
import PageTitle from "@/components/common/page_title/PageTitle";
import React from "react";

const NovelPage = () => {
  return (
    <div>
      <PageTitle pageTitle="Light Novel" />
      <div className="p-5 bg-white/10 backdrop-blur-sm">
        <NovelsSection />
      </div>
    </div>
  );
};

export default NovelPage;
