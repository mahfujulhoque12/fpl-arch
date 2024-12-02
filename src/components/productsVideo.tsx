"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoClose } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";





// Define the video data type
type VideoData = {
  url: string;
  thumbnail: string; // Local image path
};

const videoData: VideoData[] = [
  {
    url: "https://www.youtube.com/embed/m55PTVUrlnA",
    thumbnail: "/blog/blog2.png",
  },
  {
    url: "https://www.youtube.com/embed/JblrN5oNse4",
    thumbnail:"/blog/blog3.png",
  },
  {
    url: "https://www.youtube.com/embed/bNnhr_bIR9c",
    thumbnail: "/blog/blog4.png",
  },
  {
    url: "https://www.youtube.com/embed/WlxcujsvcIY?start=839",
    thumbnail: "/blog/blog5.png",
  },
];

const ProductsVideo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveVideoUrl(null);
    setIsModalOpen(false);
  };

  return (
    <section className=" py-0 md:py-10">
      <MaxWidthWrapper>
        <SubHeading className="text-gray-700 uppercase font-bold text-center pb-10">
          A Few Facts About Our Company
        </SubHeading>
        <Carousel>
          <CarouselContent>
            {videoData.map(({ url, thumbnail }, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
                onClick={() => openModal(url)}
              >
                <div className="p-4 relative z-10 shadow-md border rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 cursor-pointer">
                  <Image
                    src={thumbnail}
                    alt={`Video thumbnail ${index + 1}`}
                    width={700}
                    height={300}
                    className="rounded-md object-cover h-[300px]"
                  />
                 <div className="absolute top-[45%] left-[45%] w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <FaPlay className="text-white" size={24} />

              </div>


                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {isModalOpen && activeVideoUrl && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1 right-1 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                <IoClose />
              </button>
              <iframe
                width="100%"
                height="400"
                className="rounded-md"
                src={activeVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductsVideo;
