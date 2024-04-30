import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/flag2.svg"
            alt="china"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          China
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/uk.svg"
            alt="uk"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          United Kingdom
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
