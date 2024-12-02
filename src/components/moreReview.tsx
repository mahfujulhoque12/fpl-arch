"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";
import SubHeading from "./typography/SubHeading";

type CardData = {
  id: number;
  imageUrl: string;
  des: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: "/family/family1.png",
    des: "The team at FPL truly exceeded our expectations. From the initial consultation to the final design, they were incredibly attentive to our needs and vision. Their creativity and attention to detail made our project a success. Highly recommend them for any architectural needs!",
  },
  {
    id: 2,
    imageUrl: "/family/family2.png",
    des: "We hired FPL for a renovation project, and the results were beyond amazing. They combined modern design with practical functionality to create the perfect space for our family. Their professionalism and timely delivery made the entire process smooth and stress-free.",
  },
  {
    id: 3,
    imageUrl: "/family/family3.png",
    des: "FPL is a fantastic architectural firm that brings innovation and a fresh perspective to every project. They really listened to our requirements and offered solutions that fit our budget and lifestyle. Their designs are unique, and the quality of work is outstanding",
  },
  {
    id: 4,
    imageUrl: "/family/family4.png",
    des: "I was thoroughly impressed with FPL professionalism and creativity. They provided a modern yet timeless design for our commercial space that not only maximized functionality but also enhanced the overall aesthetic. A pleasure to work with, and they delivered on time and within budget.",
  },
];

const MoreReview: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-700 font-bold uppercase">
          here we show our more happy clients
        </SubHeading>

        <Carousel className="mt-10 md:mt-20">
          <CarouselContent className="">
            {cardData.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="relative shadow-sm p-6 border rounded-lg hover:shadow-md transition-shadow duration-300 bg-cover bg-center bg-no-repeat mb-2"
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg z-0" />

                  <div className="relative p-4 rounded-md z-10">
                    <div className="flex justify-center text-yellow-400 gap-2 text-xl">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <p className="pt-2 text-start text-sm sm:text-base text-white">
                      {expandedCard === card.id
                        ? card.des
                        : `${card.des.substring(0, 140)}...`}
                      <button
                        onClick={() => toggleReadMore(card.id)}
                        className="text-red-200 font-medium ms-2"
                      >
                        {expandedCard === card.id ? "Show Less" : "Read More"}
                      </button>
                    </p>
                  </div>
                </div>
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

export default MoreReview;
