import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/Cat Face.png" alt="Cat Face" width={50} height={50} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Muinn
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 justify-between">
        <div>
          <SidebarItem
            label="Learn"
            href="/learn"
            iconSrc="/Woman Student Light Skin Tone.png"
          />
          <SidebarItem
            label="Leaderboard"
            href="/Leaderboard"
            iconSrc="/1st Place Medal.png"
          />
          <SidebarItem
            label="quests"
            href="/quests"
            iconSrc="/Red Question Mark.png"
          />
          <SidebarItem label="shop" href="/shop" iconSrc="/Shopping Bags.png" />
        </div>
        <div className="p-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
