import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import React from "react";
import { Menu } from "lucide-react";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
