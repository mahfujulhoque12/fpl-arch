"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { IoIosArrowForward } from "react-icons/io";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";
import { IoCloseCircleSharp } from "react-icons/io5";
import Link from "next/link";

// Array of slider images
const sliderImages = [
  { src: "/slide/slide1.png", alt: "Slider 1" },
  { src: "/slide/slide12.png", alt: "Slider 2" },
  { src: "/slide/slide2.png", alt: "Slider 3" },
  { src: "/slide/slide11.png", alt: "Slider 4" },
  { src: "/slide/slide3.png", alt: "Slider 5" },
  { src: "/slide/slide7.png", alt: "Slider 6" },
  { src: "/slide/slide4.png", alt: "Slider 7" },
  { src: "/slide/slide9.png", alt: "Slider 8" },
  { src: "/slide/slide5.png", alt: "Slider 9" },
  { src: "/slide/slide8.png", alt: "Slider 10" },
  { src: "/slide/slide6.png", alt: "Slider 11" },
  { src: "/slide/slide7.png", alt: "Slider 12" },
];

// Modal Component
const Modal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg p-4 max-w-[90%] max-h-[90%]">
        <button onClick={onClose} className="absolute top-0 right-0 text-gray-600 font-bold text-lg">
          <IoCloseCircleSharp className="text-red-500" size={20} />
        </button>
        <Image src={src} alt="Selected image" width={800} height={600} className="rounded-lg w-[700px] h-[400px]" />
      </div>
    </div>
  );
};

const InteriorDesigns: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between mt-0 md:mt-10">
          <div className="mb-4 sm:mb-0">
            <SubHeading className="py-3 uppercase font-bold text-gray-700">
              Inspiration for home interior designs
            </SubHeading>
            <Paragraph className="pb-3 text-gray-500">
              Give your home a new look with these interior design ideas curated for you
            </Paragraph>
          </div>
          <div className="flex justify-end sm:justify-start">
            <Link href="/interiors-faculty" className="font-medium text-red-400 flex items-center gap-2">
              View All <IoIosArrowForward />
            </Link>
          </div>
        </div>

        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex gap-2 mt-4">
                <div className="basis-full md:basis-1/2" onClick={() => openModal(sliderImages[0].src)}>
                  <Image
                    src={sliderImages[0].src}
                    className="rounded-[5px] h-auto max-h-[180px] cursor-pointer object-cover"
                    width={700}
                    height={350}
                    alt={sliderImages[0].alt}
                  />
                </div>
                <div className="basis-full lg:basis-1/3" onClick={() => openModal(sliderImages[1].src)}>
                  <Image
                    src={sliderImages[1].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[1].alt}
                  />
                </div>
                <div className="basis-full sm:basis-1/3" onClick={() => openModal(sliderImages[2].src)}>
                  <Image
                    src={sliderImages[2].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[2].alt}
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(sliderImages[3].src)}>
                  <Image
                    src={sliderImages[3].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[3].alt}
                  />
                </div>
                <div className="basis-full lg:basis-1/2" onClick={() => openModal(sliderImages[4].src)}>
                  <Image
                    src={sliderImages[4].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer object-cover"
                    width={700}
                    height={350}
                    alt={sliderImages[4].alt}
                  />
                </div>
                <div className="basis-full lg:basis-1/4" onClick={() => openModal(sliderImages[5].src)}>
                  <Image
                    src={sliderImages[5].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[5].alt}
                  />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex gap-2 mt-4">
                <div className="basis-full md:basis-1/2" onClick={() => openModal(sliderImages[6].src)}>
                  <Image
                    src={sliderImages[6].src}
                    className="rounded-[5px] h-auto max-h-[180px] cursor-pointer object-cover"
                    width={700}
                    height={350}
                    alt={sliderImages[6].alt}
                  />
                </div>
                <div className="basis-full lg:basis-1/3" onClick={() => openModal(sliderImages[7].src)}>
                  <Image
                    src={sliderImages[7].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[7].alt}
                  />
                </div>
                <div className="basis-full sm:basis-1/3" onClick={() => openModal(sliderImages[8].src)}>
                  <Image
                    src={sliderImages[8].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[8].alt}
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <div className="basis-full sm:basis-1/4" onClick={() => openModal(sliderImages[9].src)}>
                  <Image
                    src={sliderImages[9].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[9].alt}
                  />
                </div>
                <div className="basis-full lg:basis-1/2" onClick={() => openModal(sliderImages[10].src)}>
                  <Image
                    src={sliderImages[10].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer object-cover"
                    width={700}
                    height={350}
                    alt={sliderImages[10].alt}
                  />
                </div>
                <div className="basis-full lg:basis-1/4" onClick={() => openModal(sliderImages[11].src)}>
                  <Image
                    src={sliderImages[11].src}
                    className="rounded-[5px] max-h-[180px] h-auto cursor-pointer"
                    width={700}
                    height={350}
                    alt={sliderImages[11].alt}
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>

      {isModalOpen && <Modal src={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default InteriorDesigns;
