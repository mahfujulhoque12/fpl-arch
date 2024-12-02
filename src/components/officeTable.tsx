import React from "react";
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

import table1 from "/public/table/table1.png";
import table2 from "/public/table/table2.png";
import table3 from "/public/table/table3.png";
import table4 from "/public/table/table4.png";
import table5 from "/public/table/table5.png";
import table6 from "/public/table/table6.png";

type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  des: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: table1.src,
    title: "Simple Office Table in your budget",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 2,
    imageUrl: table2.src,
    title: "Simple Office Table in your comfort zoon",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 3,
    imageUrl: table3.src,
    title: "Normal Office Table",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 4,
    imageUrl: table4.src,
    title: "Normal Office Table",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 5,
    imageUrl: table5.src,
    title: "Normal Office Table",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 6,
    imageUrl: table6.src,
    title: "Normal Office Table",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 7,
    imageUrl: table4.src,
    title: "Normal Office Table",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
];

const officeTable = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          {" "}
          Office Table
        </SubHeading>
        <Paragraph className="text-center py-5 w-full md:w-[500px] flex mx-auto">
          You can choose your favourite table for your office. We can sell your
          favourite one at minimum cost.
        </Paragraph>
        <Carousel>
          <CarouselContent>
            {cardData.map((card) => (
              <CarouselItem key={card.id} className="basis-full md:basis-1/3">
                <div className="border p-3 shadow-md mb-2 rounded-lg hover:scale-[102%] transition translate duration-500 h-full flex flex-col">
                  <Image
                    src={card.imageUrl}
                    width={500}
                    height={300}
                    alt="village"
                    className="rounded-md h-[200px] object-cover"
                  />
                  <h3 className="text-base text-gray-600 font-bold mt-3">
                    {card.title}
                  </h3>
                  <p className="py-2 text-sm ">{card.des}</p>
                  <div className="flex justify-start w-full mt-auto">
                    <button
                      type="button"
                      className="gap-2 text-center flex bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                    >
                      More Details
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

export default officeTable;
