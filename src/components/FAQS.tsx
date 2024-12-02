"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import { useRouter } from "next/navigation";

const faqData = [
  {
    question: "1. What is the tenure of the franchise agreement?",
    answer:
      "Just like a good friendship, the tenure is designed to be super flexible and long-lasting. The mutually agreed tenure for the franchise will be 5 years, which can be renewed at the time of expiry.",
  },
  {
    question: "2. What is the total amount of investment I’ll have to make?",
    answer:
      "We like to keep things transparent in this partnership. Your total investment will be about bdt 20-25 lakh. This all-inclusive amount covers everything you need to shine, including the display cost, franchise fees, store branding and the epic launch cost..",
  },
  {
    question: "3. Who is a right Livspace partner?",
    answer:
      "The criteria are pretty simple. We're looking for an enthusiastic entrepreneur with experience in managing studios and marketing. Additionally, an investment of bdt20-25 lakh is required, but more than the numbers, we seek someone who shares our commitment and is willing to take ownership for lead generation and sales.",
  },
  {
    question: "4. How will Livspace support the business?",
    answer:
      "We've got your back, every step of the way! As our partner, you'll gain access to Canvas, a modular design and quotation tool. We'll also help you hire and train your amazing staff. Facing technical challenges, sales hurdles, delivery puzzles or installation wonders? Fear not, because you can count on us to lend a helping hand, no matter the task at hand. And that's not all! You'll also get an opportunity to interact and learn from our regional head and operation lead.",
  },
];

const FAQS: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleMoreDetails = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/contact-us");
    setLoading(false);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.maxHeight =
          activeIndex === index ? `${content.scrollHeight}px` : "0px";
        content.style.transition = "max-height 0.2s ease";
      }
    });
  }, [activeIndex]);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <SubHeading className="text-center  font-bold text-gray-700 mb-10 md:mb-15">
          FAQs
        </SubHeading>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white px-6 rounded-[5px] border shadow-sm hover:shadow-md transform translate duration-300"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left text-gray-900 font-semibold focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-destructive transition-transform transform" />
                ) : (
                  <ChevronDown className="text-destructive transition-transform transform" />
                )}
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="overflow-hidden max-h-0"
              >
                <span className="mb-4 inline-block">{faq.answer}</span>
              </div>
            </div>
          ))}

          <div className="py-5 md:py-10">
            <SubHeading className="text-center text-gray-700 uppercase font-bold">
              Let your growth story begin!
            </SubHeading>

           <div className="flex py-10 justify-center">
           <button
              type="button"
              className="sign border-none   cursor-pointer font-medium text-[14px] text-white bg-[#cf4045] hover:bg-[#c13136] min-w-[64px] px-6 py-3 rounded-full ml-4"
              onClick={handleMoreDetails}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <span className="loader mr-2" />
                  Loading...
                </div>
              ) : (
                "Contact Us"
              )}
            </button>
           </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQS;
