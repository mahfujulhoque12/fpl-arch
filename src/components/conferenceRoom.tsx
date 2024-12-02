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

import conference1 from "/public/conference/conference6.png";
import conference2 from "/public/conference/conference2.png";
import conference3 from "/public/conference/conference3.png";
import conference4 from "/public/conference/conference4.png";
import conference5 from "/public/conference/conference5.png";
import conference6 from "/public/conference/conference1.png";

type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  des: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: conference1.src,
    title: "Simple Conference Room in your budget",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 2,
    imageUrl: conference2.src,
    title: "Simple Conference Room in your comfort zoon",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 3,
    imageUrl: conference3.src,
    title: "Normal Conference Room",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 4,
    imageUrl: conference4.src,
    title: "Normal Conference Room",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 5,
    imageUrl: conference5.src,
    title: "Normal Conference Room",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 6,
    imageUrl: conference6.src,
    title: "Normal Conference Room",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 7,
    imageUrl: conference1.src,
    title: "Normal Conference Room",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
];

const ConferenceRoom = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          {" "}
          Conference Room
        </SubHeading>
        <Paragraph className="text-center py-5 w-full md:w-[500px] flex mx-auto">
          You can choose your favourite conference room for your office. We can
          build your favourite one at minimum cost.
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

export default ConferenceRoom;
