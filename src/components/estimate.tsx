"use client"
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { useState, useEffect } from "react";
import Image from "next/image";
import es1 from "/public/fac1.png";
import es2 from "/public/duplexhouse/duplex1.png";
import es3 from "/public/facalty/furniture.png";
import { motion, useAnimation } from "framer-motion";
import SubHeading from "./typography/SubHeading";
import Paragraph from "./typography/Paragraph";

type CardData = {
  id: number;
  title: string;
  des: string;
  imageUrl: string;
  href: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    title: "Interiors Faculty",
    des: "Know the estimated price for your full home interiors",
    imageUrl: es1.src,
    href: "/interiors-faculty",
  },
  {
    id: 2,
    title: "Construction Faculty",
    des: "Know the estimated price for your full construction interiors",
    imageUrl: es2.src,
    href: "/construction-faculty",
  },
  {
    id: 3,
    title: "Furniture Faculty",
    des: "Know the estimated price for your full furniture interiors",
    imageUrl: es3.src,
    href: "#",
  },
];

const Estimate: React.FC = () => {
  const words = [
    "Interiors Faculty",
    "Construction Faculty",
    "Furniture Faculty",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        });
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [controls, words.length]);

  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<number | null>(null);

  const handleMoreDetails = async (id: number, href: string) => {
    setLoadingSlug(id);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(href);
    setLoadingSlug(null);
  };

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center font-bold uppercase py-3 text-gray-700">
          Get the estimate for your{" "}
          <motion.span
            animate={controls}
            className="inline-block text-[#cf4045]"
          >
            {words[currentIndex]}
          </motion.span>
        </SubHeading>
        <Paragraph className="text-center pb-3 text-gray-500">
          Calculate the approximate cost of doing up your home interiors
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="  p-4 rounded-lg border shadow-md hover:scale-[102%] transform translate duration-500"
            >
              <div>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={500}
                  height={400}
                  className="h-[300px] rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl mt-1 font-semibold text-gray-700">
                {card.title}
              </h3>
              <p className="text-base md:mb-0 py-1">{card.des}</p>
              <div className="flex justify-start w-full">
                <button
                  type="button"
                  onClick={() => handleMoreDetails(card.id, card.href)}
                  disabled={loadingSlug === card.id}
                  className="gap-2 text-center flex bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
                >
                  {loadingSlug === card.id ? (
                    <div className="flex items-center">
                      <span className="loader mr-2" />
                      Loading...
                    </div>
                  ) : (
                    "More Details"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Estimate;
