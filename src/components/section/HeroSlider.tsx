"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MainHeading from "@/components/typography/MainHeading";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Paragraph from "@/components/typography/Paragraph";
import Link from 'next/link';

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  action: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "https://wallpapercave.com/wp/wp11265278.jpg",
    title: "Crafting Architectural Masterpieces for Modern Living",
    description: "We design sophisticated, practical spaces tailored to modern lifestyles",
    action: "Book Free Consultation",
  },
  {
    id: 2,
    imageUrl: "https://wallpapercave.com/wp/wp11265359.jpg",
    title: "Where Vision Meets Precision in Architecture",
    description: "With precision and detail, we turn your vision into architectural reality.",
    action: "Calculate Now",
  },
  {
    id: 3,
    imageUrl: "https://wallpapercave.com/wp/wp11265342.jpg",
    title: "Designing Spaces that Define Lifestyle",
    description: "Our designs reflect your lifestyle, adding personality to every space.",
    action: "Visit Us",
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // Time in milliseconds for each slide

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[350px] md:h-[580px] overflow-hidden">
      <MaxWidthWrapper>
        {/* Slider content */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <MainHeading className="mb-5 font-bold uppercase w-full md:w-3/6 mx-auto text-center">
                {slide.title}
              </MainHeading>
              <Paragraph className="mb-4">{slide.description}</Paragraph>
              <Link href="/cotesion"
                className="font-semibold bg-red-600 transition duration-150 hover:bg-red-700 rounded-[27px] px-4 py-2  uppercase"
              >
                {slide.action}
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <Button
        
          className="rounded-full bg-gray-100 text-dark hover:text-white hover:bg-[#c13136] absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl flex items-center justify-center"
          size="icon"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-10 w-10" />
        </Button>

        <Button
          className="rounded-full bg-gray-100 text-dark hover:text-white hover:bg-[#c13136] absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl"
          size="icon"
          onClick={nextSlide}
        >
          <ChevronRight className="h-10 w-10" />
        </Button>

        {/* Indicator Dots */}
        <div className="border flex justify-center">
          <div className="absolute bottom-4 flex justify-center">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-5 cursor-pointer ${
                  index === currentSlide
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-100"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSlider;
