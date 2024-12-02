"use client";
import React,{useState} from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

import { useRouter } from "next/navigation";
import { cardData } from "@/data/constractionFacalty";

const BoundaryRenovation: React.FC = () => {
  const router = useRouter();

  const [loadingSlug, setLoadingSlug] = useState<string | null>(null); 
  const handleMoreDetails = async (slug: string) => {
    setLoadingSlug(slug)
    await new Promise((resolve)=>(setTimeout(resolve,500))) 
    router.push(`/cotesion`);
    setLoadingSlug(null)
  };


  const boundaryData = cardData.filter(
    (card) => card.id >= 41 && card.id <= 46
  );

  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div className="">
          <div className="mb-4 sm:mb-0">
            <SubHeading className="text-center text-gray-600 font-bold uppercase">
              Boundary Renovation
            </SubHeading>
            <Paragraph className="text-center py-5 w-full md:w-[80%] flex mx-auto">
          
Boundary Renovation involves upgrading and redesigning the exterior boundaries of a property, including fences, walls, and gates, to enhance privacy, security, and curb appeal.
            </Paragraph>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            {boundaryData?.map((card) => (
              <CarouselItem
                key={card.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="border p-3 mb-2 shadow-md  rounded-lg hover:scale-[102%] transition translate duration-500  h-full flex flex-col">
                  <Image
                    src={card.imageUrl as string}
                    width={700}
                    height={300}
                    alt="village"
                    className="rounded-md h-[200px] object-cover"
                  />
                  <h3 className=" text-gray-600 text-base font-semibold	 mt-3">
                    {card.title}
                  </h3>
                  <p className=" py-2 text-sm">{card.des}</p>

                  <div className="flex  justify-start  w-full">
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

export default BoundaryRenovation;
