"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/card/cards-carousel";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import image2 from "/public/carousel-1.1.jpg";
import image3 from "/public/carousel-2.jpg";
import image4 from "/public/carousel-3.jpg";

export function ImageCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className=" font-bold uppercase text-gray-700">
          Get a glimpse of Livspace homes
        </SubHeading>
        <Paragraph className="text-gray-500 mt-2">
          Latest dream home interiors delivered the hassle-free way
        </Paragraph>
        <Carousel items={cards} initialScroll={2} />
      </MaxWidthWrapper>
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt veniam voluptatem recusandae dolorum?
              </span>{" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              ut enim veniam magni eius dolorum, ullam ipsam aperiam sequi non.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Living Room",
    title: "Transform your living room into a cozy retreat.",
    src: image2.src,
    content: <DummyContent />,
  },
  {
    category: "Kitchen",
    title: "Elevate your kitchen with modern designs.",
    src: image3.src,
    content: <DummyContent />,
  },
  {
    category: "Bedroom",
    title: "Create a serene bedroom oasis.",
    src: image4.src,
    content: <DummyContent />,
  },
  {
    category: "Office",
    title: "Design an inspiring home office.",
    src: image2.src,
    content: <DummyContent />,
  },
  {
    category: "Office",
    title: "Design an inspiring home office.",
    src: image2.src,
    content: <DummyContent />,
  },
  {
    category: "Office",
    title: "Design an inspiring home office.",
    src: image2.src,
    content: <DummyContent />,
  },
];
