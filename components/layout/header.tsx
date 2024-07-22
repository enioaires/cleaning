"use client";
import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneIcon, MenuIcon, XIcon } from "lucide-react";

export const Header: FC = ({}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Album", href: "#album" },
  ];

  return (
    <div className="bg-primaryHeader h-20 flex items-center">
      <div className="max-w-screen-xl mx-auto px-4 w-full flex justify-between items-center">
        <Link href="#home">
          <Image src="/logoIpsum.svg" width={145} height={50} alt="logo" />
        </Link>
        <nav className="hidden md:flex md:gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
              {item.name}
            </a>
          ))}

          <a href="#contact" className="flex">
            <Button variant="default" size="sm">
              <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us
            </Button>
          </a>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-primaryHeader z-10">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer"
              >
                {item.name}
              </a>
            ))}

            <a href="#contact" className="flex">
              <Button variant="default" size="sm">
                <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us
              </Button>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};
