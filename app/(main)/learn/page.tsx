import React from "react";
import StickyWrapper from "@/components/sticky-wrapper";
import FeedWrapper from "@/components/feed-wrapper";
import Header from "./Header";
import { title } from "process";
import UserProgress from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse  gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Chinese", imageSrc: "flag2.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Chinese" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
