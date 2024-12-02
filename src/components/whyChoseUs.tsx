"use client";
import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import logo1 from "/public/partner/partner1.png";
import logo2 from "/public/partner/partner2.png";
import logo3 from "/public/partner/partner3.png";
import logo4 from "/public/partner/partner4.png";

import SubHeading from "./typography/SubHeading";

type CardData = {
  id: number;
  title: string;
  imageUrl: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Ability to invest BDT at 20-25 lakh",
    imageUrl: logo1.src,
  },
  {
    id: 2,
    title: "In-depth understanding of the local market",
    imageUrl: logo2.src,
  },
  {
    id: 3,
    title: "Ownership for lead generation and sales",
    imageUrl: logo3.src,
  },
  {
    id: 4,
    title: "Experience in managing studios and marketing",
    imageUrl: logo4.src,
  },
];

const WhyChoseUs: React.FC = () => {


  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center  pb-5 text-gray-700">
        What does it take to become a FPL partner?
        </SubHeading>
        <p className="text-base font-medium text-gray-500 text-center">
      The criteria are straightforward. If you feel you&apos;ve got the following qualities, you&apos;ve already qualified to be our partner.
    </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
         {cardData.map((card)=>(
          <div
          className="shadow-md py-3 border px-4 bg-white rounded-[5px]"
          key={card.id}
          >
          <div className="justify-center items-center flex">
            <Image
              src={card.imageUrl}
              alt={`logo-${card.id}`}
              width={250}
              height={250}
            />
          </div>
          <p className="text-center text-gray-500 mt-4 pb-5">
            {card.title}
          </p>
          </div>
         ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default WhyChoseUs;


