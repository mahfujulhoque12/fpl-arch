"use client";
import React from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


import { cardData } from "@/data/highlight";

const WorkHightlight: React.FC = () => {
  const router = useRouter();
  const handleMoreDetails =  (slug: string) => {
    router.push(`/hightlight/${slug}`);
  };





  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center mb-8 text-gray-600 font-bold uppercase">
          Work Highlight
        </SubHeading>
        <Carousel>
        <CarouselContent>

            {cardData?.map((card) => (            
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <button
               type="button"
 
               onClick={() => handleMoreDetails(card.slug)}
            
               >
                <div className="border p-3 shadow-md mb-2  rounded-lg hover:scale-[102%] transition translate duration-500  h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[250px]  object-cover"
                  />
                  <h3 className="text-start text-gray-600 py-1 text-lg font-semibold	">{card.titleTwo}</h3>
                  <p className="text-start  text-gray-600 text-sm font-normal">{card.desTwo}</p>
                </div>
                </button>
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

export default WorkHightlight;
