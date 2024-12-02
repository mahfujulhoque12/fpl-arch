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
import { cardData } from "@/data/constractionFacalty";

const Resort = () => {
  const router = useRouter();

  const [loadingSlug, setLoadingSlug] = useState<string | null>(null); 
  const handleMoreDetails = async (slug: string) => {
    setLoadingSlug(slug)
    await new Promise((resolve)=>(setTimeout(resolve,500))) 
    router.push(`/cotesion`);
    setLoadingSlug(null)
  };

  const resortData = cardData.filter((card) => card.id >= 25 && card.id <= 30);
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          Resort
        </SubHeading>
        <Paragraph className="text-center py-5 w-full md:w-[80%] flex mx-auto">
         
The Resort is a luxurious getaway designed to offer ultimate relaxation and rejuvenation, combining stunning natural beauty, world-class amenities, and exceptional service to create a memorable and tranquil escape from everyday life.
        </Paragraph>
        <Carousel>
          <CarouselContent>
            {resortData?.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="border p-4 shadow-md  mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[200px] object-cover"
                  />
                  <h3 className="text-base text-gray-600 font-bold mt-3">
                    {card.title}
                  </h3>
                  <p className="text-sm py-2">{card.des}</p>

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
                          "Get Quote"
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

export default Resort;
