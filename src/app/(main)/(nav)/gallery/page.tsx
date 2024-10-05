import GallerySection from "@/components/common/gallery/GallerySection";
import PageTitle from "@/components/common/page_title/PageTitle";

const GalleryPage = () => {
  return (
    <div>
      <PageTitle pageTitle="Gallery" />
      <div className="p-5 bg-white/10 backdrop-blur-sm">
        <GallerySection />
      </div>
    </div>
  );
};

export default GalleryPage;
