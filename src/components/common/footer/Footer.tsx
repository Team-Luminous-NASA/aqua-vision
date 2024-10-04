import { siteConfig } from "@/config/site";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SiteFooter() {
  return (
    <footer className="mx-auto space-y-8 px-4 pt-16 text-xs font-medium text-muted-foreground 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md py-2 md:px-10">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        {siteConfig.footer.map((section, index) => {
          const sectionKey = Object.keys(section)[0] as keyof typeof section;
          return (
            <nav
              key={index}
              className="flex flex-col items-start space-y-2.5 md:space-y-1.5"
            >
              <h3 className="mb-2 font-semibold uppercase tracking-wide text-white">
                {sectionKey}
              </h3>
              {section[sectionKey]?.map((linkItem: any, idx: number) => (
                <a
                  key={idx + linkItem.name}
                  href={linkItem.link}
                  className="transition hover:text-white"
                >
                  {linkItem.name}
                </a>
              ))}
            </nav>
          );
        })}
      </div>
      <div className="flex flex-col space-y-4 border-t py-8 sm:items-center sm:justify-between md:flex-row md:space-y-0">
        <p>&copy; 2024 Team Luminous, NASA Space App.</p>
        <div className="flex space-x-4">
          {siteConfig.socialLinks.map((social, index) => (
            <TooltipProvider key={index + social.link}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    key={index}
                    href={social.link}
                    className="transition hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{social.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <p>Have a nice day! 🎉</p>
      </div>
    </footer>
  );
}
