import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Infinity } from "lucide-react";

type Props = {
  activeCourse: { title: string; imageSrc: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="">
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={28}
            height={28}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src="/High Voltage.png"
            alt="Points"
            className="mr-2"
            width={24}
            height={24}
          />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src="/Red Heart.png"
            alt="Hearts"
            className="mr-2"
            width={22}
            height={22}
          />
          {hasActiveSubscription ? (
            <Infinity className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
