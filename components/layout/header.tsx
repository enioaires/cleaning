import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";

export const Header: FC = ({}) => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
  ];
  return (
    <div className="bg-primaryHeader h-20 flex items-center">
      <div className="max-w-screen-xl mx-auto px-2 w-full flex justify-between items-center">
        <Link href="/">
          <Image src="/logoIpsum.svg" width={145} height={50} alt="logo" />
        </Link>
        <nav className="hidden md:flex md:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <Button variant="default" size="sm">
            <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us
          </Button>
        </nav>
      </div>
    </div>
  );
};
