"use client";
import { FC, useState } from "react";
import { cardData } from "@/data/constractionFacalty";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoCloseCircleSharp } from "react-icons/io5";

type PageProps = {
  params: {
    slug: string;
  };
};

const Page: FC<PageProps> = ({ params }) => {
  const allInfo = cardData.find((card) => card.slug === params.slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className=" gap-3  rounded-lg shadow-md p-4 border ">
          <Carousel>
            <CarouselContent>
              {allInfo &&
                allInfo.allImageUrl &&
                allInfo.allImageUrl.map((imageUrl: string, index: number) => (
                  <CarouselItem
                    key={index}
                    className=" basis-full md:basis-1/3 "
                  >
                    <Image
                      src={imageUrl}
                      width={400}
                      height={500}
                      alt={allInfo.title}
                      className="rounded-md h-[300px] transition-transform duration-500 ease-in-out hover:scale-[101%]"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <h3 className="text-center font-bold uppercase text-3xl text-gray-700 pt-5">
          {allInfo?.title}
        </h3>

        <div className="flex  justify-center mt-2 mb-1 w-full">
          <Link
            href="/cotesion"
            className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
          >
            Get Quotation
          </Link>
        </div>

        <div className="mt-4 flex-col md:flex-row md:flex  md:gap-4">
          <div className="border w-full md:w-8/12 p-4 rounded-lg shadow-md">
            <h2 className="uppercase text-xl font-bold text-gray-700">
              About Floor Planer
            </h2>
            <p className="mt-2 text-gray-600 text-base">
              {allInfo?.companyInfo}
            </p>

            <h2 className="mt-2 text-xl uppercase font-bold text-gray-700">
              Design Features
            </h2>
            <p className="mt-2 text-gray-600 text-base">
              {allInfo?.designFeatures}
            </p>

            <h2 className="mt-2 text-xl uppercase font-bold text-gray-700">
              Sustainability Features
            </h2>
            <p className="mt-2 text-gray-600 text-base">
              {allInfo?.sustainabilityFeatures}
            </p>

            <h2 className="mt-2 text-xl uppercase font-bold text-gray-700">
              Case Studies
            </h2>
            <p className="mt-2 text-gray-600 text-base">
              {allInfo?.caseStudies}
            </p>

            <h2 className="mt-2 text-xl uppercase font-bold text-gray-700">
              Floor Plans
            </h2>
            <p className="mt-2 text-gray-600 text-base">
              {allInfo?.floorPlans}
            </p>
          </div>

          <div className="border w-full md:w-4/12 mt-5 md:mt-0 p-4 rounded-lg shadow-md">
            <h2 className="uppercase text-xl text-center font-bold text-gray-700">
              Others Info
            </h2>
            <p className="text-gray-600 text-base mt-2">
              <b>Name:</b> {allInfo?.title}
            </p>
            <p className="text-gray-600 text-base mt-1">
              <b>Description:</b> {allInfo?.des}
            </p>
            <p className="text-gray-600 text-base mt-1">
              <b>Price:</b> {allInfo?.price}{" "}
              <del className="text-red-600">{allInfo?.oldPrice}</del>
            </p>
            <p className="text-gray-600 text-base mt-1">
              <b>Category:</b> {allInfo?.type}
            </p>
            <p className="text-gray-600 text-base mt-1">
              <b>Complete Date:</b> {allInfo?.completeDate}
            </p>

            <p className="text-gray-600 text-base mt-1">
              <b>Key Feature:</b> {allInfo?.feature}
            </p>

            <div className="grid grid-cols-3 gap-2 mt-1">
              {allInfo?.allImageUrl?.map((image, index) => (
                <Image
                  alt="image"
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  className="h-[100px] rounded-md cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative bg-white p-5 rounded-md">
              <Image
                src={selectedImage}
                alt="Selected Image"
                width={500}
                height={500}
                className="rounded-md max-w-full h-[400px] object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 text-white  text-2xl"
              >
                <IoCloseCircleSharp className="text-red-500" />
              </button>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};
export default Page;
