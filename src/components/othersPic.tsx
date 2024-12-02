"use client";
import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import other1 from "/public/others/others1.png";
import other2 from "/public/others/others2.png";
import other3 from "/public/others/others3.png";
import other4 from "/public/others/others4.png";
import Link from "next/link";

type CardData = {
  id: number;
  imageUrl: string;
  des: string;
};
const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: other1.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 2,
    imageUrl: other2.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 3,
    imageUrl: other3.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
  {
    id: 4,
    imageUrl: other4.src,
    des: "You can choise your dream house from here. we can bulid your dream house at minimun cost",
  },
];

const OthersPic = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase mb-10">
          There are losts off sample here
        </SubHeading>
        <Carousel>
          <CarouselContent>
            {cardData?.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Link href="/cotesion">
                <div className="border p-4 shadow-md  mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[200px] object-cover"
                  />
                  <p className="text-sm py-2">{card.des}</p>

                  <div className="flex  justify-start w-full"></div>
                </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </section>
  );
};

export default OthersPic;
