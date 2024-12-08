import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="Open Navigation Menu"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 bg-white md:hidden">
          <SheetHeader>
            <SheetTitle>
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={128}
                height={38}
              />
              <Separator className="border-gray-60" />
              <NavItems />
            </SheetTitle>
          </SheetHeader>
          {/* Add your navigation menu items here */}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;