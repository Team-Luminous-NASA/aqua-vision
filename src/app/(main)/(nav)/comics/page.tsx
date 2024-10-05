import ComicsSection from "@/components/common/comics/ComicsSection";
import PageTitle from "@/components/common/page_title/PageTitle";
import React from "react";

const ComicsPage = () => {
  return (
    <div>
      <PageTitle pageTitle="Comics" />
      <div className="p-5 bg-white/10 backdrop-blur-sm">
        <ComicsSection />
      </div>
    </div>
  );
};

export default ComicsPage;
