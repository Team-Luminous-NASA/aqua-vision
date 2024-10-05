import { comicsList } from "@/data/comics";
import ComicsCard from "./ComicsCard";

const ComicsSection = () => {
  return (
    <div className="container mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-white mb-10">Comics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {comicsList.map((comic) => (
          <ComicsCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

export default ComicsSection;
