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
import station1 from "/public/station/station1.png";
import station2 from "/public/station/station2.png";
import station3 from "/public/station/station3.png";
import station4 from "/public/station/station4.png";
import station5 from "/public/station/station5.png";
import station6 from "/public/station/station6.png";

type CardData = {
  id: number;
  imageUrl: string;
  title: string;
  des: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: station1.src,
    title: "Simple Work Station in your budget",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 2,
    imageUrl: station2.src,
    title: "Simple Work Station in your comfort zoon",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 3,
    imageUrl: station3.src,
    title: "Normal Work Station",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 4,
    imageUrl: station4.src,
    title: "Normal Work Station",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 5,
    imageUrl: station5.src,
    title: "Normal Work Station",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 6,
    imageUrl: station6.src,
    title: "Normal Work Station",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
  {
    id: 7,
    imageUrl: station3.src,
    title: "Normal Work Station",
    des: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci",
  },
];

const WorkStation = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center text-gray-600 font-bold uppercase">
          {" "}
          Work Station
        </SubHeading>
        <Paragraph className="text-center py-5 w-full md:w-[500px] flex mx-auto">
          You can choose your favourite work station for your office. We can
          make your favourite one at minimum cost.
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

export default WorkStation;
