import PageTitle from "@/components/common/page_title/PageTitle";
import AboutText from "@/components/pages/about/AboutText";
import TeamMemberSection from "@/components/pages/about/TeamMember";

const AboutPage = () => {
  return (
    <div>
      <PageTitle pageTitle="About Us" />
      <div className="mb-10">
        <AboutText />
      </div>
      <div className="mx-auto">
        <TeamMemberSection />
      </div>
    </div>
  );
};

export default AboutPage;
