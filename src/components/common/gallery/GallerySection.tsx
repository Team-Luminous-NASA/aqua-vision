import { galleryList } from "@/data/gallery";
import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="container mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-white mb-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryList.map((image, index) => (
          <a
            key={index}
            className="relative group overflow-hidden rounded-lg"
            href={image.newsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image
                src={image.imgUrl}
                alt={image.alt}
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm px-5">{image.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
