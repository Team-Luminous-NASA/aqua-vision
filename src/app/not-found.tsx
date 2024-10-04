import { Button } from "@/components/ui/button";
import "@/styles/pages/not-found.css";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="min-h-screen min-w-full grid place-content-center">
      <div>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center mb-2">Not Found</h1>
          <p className="text-xs mb-2">Go Back to</p>
          <Link href="/">
            <Button variant="secondary" size="sm">
              Home
            </Button>
          </Link>
        </div>
        <div className="planet text-4xl"></div>
      </div>
    </div>
  );
};

export default Custom404;
