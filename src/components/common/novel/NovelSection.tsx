import Image from "next/image";
import { Button } from "@/components/ui/button";
import { novelList, INovel } from "@/data/novels";

function NovelCard({ novel }: { novel: INovel }) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
        <Image
          src={novel.image}
          alt={novel.title}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold text-white">{novel.title}</h3>
      <Button
        className={`mt-2 w-full ${novel.isFree ? "bg-green-600 hover:bg-green-500" : "bg-blue-600 hover:bg-blue-500"}`}
      >
        {novel.isFree ? "Free Download" : "Download"}
        {/* Downl */}
      </Button>
    </div>
  );
}

export default function NovelsSection() {
  return (
    <div className="p-8">
      <h2 className="mb-6 text-4xl font-bold text-white">Novels</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {novelList.map((novel) => (
          <NovelCard key={novel.id} novel={novel} />
        ))}
      </div>
    </div>
  );
}
