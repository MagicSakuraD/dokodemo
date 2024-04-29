import React from "react";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row  justify-center items-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/react.svg" fill alt="Hero" />
      </div>
      <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
        Learn, practice, and master music
      </h1>
      <div>
        <ClerkLoading>
          <Loader className="w-5 h-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant={"secondary"} className="w-full">
                开始
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignIn></SignIn>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Home;
