"use client";
import { FC } from "react";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

export const ContactInfo: FC = ({}) => {
  const items = [
    {
      title: "Office Adress",
      description:
        "9552 W Tropicana Ave, Apt. 1049, Las Vegas, NV 89147, United States",
      icon: LocateIcon,
    },
    {
      title: "Phone Number",
      description: "1 (702) 352 6255",
      secondDescription: "1 (702) 807 0249",
      icon: PhoneIcon,
    },
    {
      title: "Email",
      description: "soraiavieiraus@gmail.com",
      secondDescription: "lenaoliveira200283@gmail.com",
      icon: MailIcon,
    },
    {
      title: "Opening Time",
      description: "9:00 AM - 5:00 PM",
      icon: ClockIcon,
    },
    {
      title: "Instagram",
      description: "1 (702) 352 6255",
      secondDescription: "1 (702) 807 0249",
      icon: InstagramIcon,
    },
    {
      title: "Facebook",
      description: "soraiavieiraus@gmail.com",
      secondDescription: "lenaoliveira200283@gmail.com",
      icon: FacebookIcon,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex flex-col gap-y-4 cursor-default px-4">
      <div>
        <h1 className="font-semibold text-2xl max-w-[400px]">
          Feel free to contact us with any kind of questions.
        </h1>
        <span className="text-sm text-muted-foreground">
          We will get back to you as soon as possible.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <item.icon className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <TooltipProvider>
                <div className="flex flex-col gap-y-1 items-start">
                  <Tooltip>
                    <TooltipTrigger>
                      <p
                        className="text-sm text-muted-foreground hover:cursor-pointer hover:text-primary text-left max-w-[222px]"
                        onClick={() => copyToClipboard(item.description)}
                      >
                        {item.description}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>Click to copy</TooltipContent>
                  </Tooltip>

                  {item.secondDescription && (
                    <Tooltip>
                      <TooltipTrigger>
                        <p
                          className="text-sm text-muted-foreground hover:cursor-pointer hover:text-primary"
                          onClick={() =>
                            copyToClipboard(item.secondDescription ?? "")
                          }
                        >
                          {item.secondDescription}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>Click to copy</TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
