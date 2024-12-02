 "use client"
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

import Image from "next/image";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import { useRouter } from "next/navigation";
import { cardData } from "@/data/shopData";



const ShopCard: React.FC = () => {
  const router = useRouter();

  const handleMoreDetails = async (slug: string) => {
  
    router.push(`/shop/${slug}`);
 
  };
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center uppercase font-bold py-3 text-gray-700">
          One-stop shop for all things interiors
        </SubHeading>

        <Paragraph className="text-center w-full md:w-[65%] mx-auto text-gray-500">
          Be it end-to-end interiors, renovation or modular solutions, we have
          it all for your home or office. With a wide range of furniture &
          decor, we have your back from start to finish.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-5 mt-5 mb-5 rounded-md">
          {cardData.map((card) => (
            <div className="cursor-pointer" onClick={()=>handleMoreDetails(card.slug)}  key={card.slug}>
            <div
              
              className="group h-full flex-grow shadow-md border hover:shadow-sm hover:scale-[102%] rounded-[5px] overflow-hidden transition-translate duration-500"
            >
              <div className="block">
                <div className="relative w-full h-64">
                  <Image
                    src={card.imageUrl as string}
                    alt="card1-img"
                    className="object-cover rounded-md "
                    fill
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-600">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 pt-1 pb-4">{card.des}</p>
                </div>
              </div>
            </div>
            </div>
            
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShopCard;
