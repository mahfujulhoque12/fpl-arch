"use client";
import React,{useState} from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";


import { cardData } from "@/data/livingRoomData";

const InteriorHome = () => {
  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null); 

  const handleMoreDetails = async (slug: string) => {
    setLoadingSlug(slug)
    await new Promise((resolve)=>(setTimeout(resolve,500))) 
    router.push(`/interiors-faculty/${slug}`);
    setLoadingSlug(null)
  };

  const bedRoomCard = cardData.filter((card) => card.id >= 7 && card.id <= 12);

  return (
    <section className="py-0 md:py-10">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
        Your Ultimate Destination for Interior Design
        </SubHeading>
        <Paragraph className="text-center text-gray-500 py-5 w-full md:w-[80%] flex mx-auto">
        Whether you are looking for complete interior solutions, stylish renovations, or custom modular designs, we ve got everything you need for your home or office. Explore our extensive collection of furniture and decor, and let us support you every step of the way!
        </Paragraph>
        <Carousel>
          <CarouselContent>
            {bedRoomCard.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="border p-3 shadow-md mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[250px] object-cover"
                  />
                  <h3 className=" text-base text-gray-600 font-bold mt-3">
                    {card.title}
                  </h3>
                  <p className=" py-2 text-sm">{card.des}</p>

                  <div className="flex  justify-start w-full">
                    <button
                      type="button"
                      className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                      onClick={() => handleMoreDetails(card.slug)}
                      disabled={loadingSlug === card.slug}
                    >
                       {loadingSlug === card.slug ? ( 
                        <div className="flex items-center">
                          <span className="loader mr-2" />
                          Loading...
                        </div>
                      ) : (
                        "More Details"
                      )}
                    </button>
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

export default InteriorHome;
