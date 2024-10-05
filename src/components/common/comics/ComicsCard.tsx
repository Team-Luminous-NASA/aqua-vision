import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { IComics } from "@/data/comics";

const ComicsCard = ({ comic }: { comic: IComics }) => {
  return (
    <Card
      key={comic.id}
      className="w-full max-w-xs flex flex-col gap-4 relative group overflow-hidden rounded-lg bg-sky-700 hover:bg-sky-800 hover:shadow-lg hover:scale-105 transition-all hover:shadow-white/25 duration-500"
    >
      <Image
        src={comic.imgUrl}
        alt={comic.alt}
        width={400}
        height={400}
        className="w-full object-cover"
        style={{ aspectRatio: "400/400", objectFit: "cover" }}
      />
      <div className="p-5 text-white flex flex-col justify-between items-start h-full">
        <CardHeader className="p-0 pb-5">
          <CardTitle className="text-lg font-bold leading-none">
            {comic.title}
          </CardTitle>
          <CardDescription className="text-inherit leading-none">
            {comic.description}
          </CardDescription>
        </CardHeader>
        <div className="w-full">
          <CardContent className="p-0 flex items-center text-xs mb-3">
            <div className="mr-2">Rating:</div>
            <div className="flex items-center gap-1 shrink-0">
              {Array.from({ length: 5 }, (_, index) => {
                const isFullStar =
                  comic.rating && index < Math.floor(comic.rating);
                const isHalfStar =
                  comic.rating &&
                  comic.rating - index >= 0.5 &&
                  comic.rating - index < 1;

                return (
                  <span key={index}>
                    {isFullStar ? (
                      <BsStarFill className="w-4 h-4 fill-primary text-yellow-500" />
                    ) : isHalfStar ? (
                      <BsStarHalf className="w-4 h-4 fill-primary text-yellow-600" />
                    ) : (
                      <BsStar className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    )}
                  </span>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="w-full p-0 flex gap-2 justify-evenly">
            <Button variant="secondary" size="default" className="flex-1">
              <a href={comic.dwnLink} download={false}>
                View
              </a>
            </Button>
            <Button
              size="default"
              variant="link"
              className="bg-black text-white flex-1"
            >
              {/* Download link button */}
              <a
                href={comic.dwnLink}
                download={true}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                about="Download"
                accessKey="Download"
                contextMenu="Download"
              >
                Download
              </a>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ComicsCard;
