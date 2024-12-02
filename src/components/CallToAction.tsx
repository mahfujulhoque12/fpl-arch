"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Paragraph from "./typography/Paragraph";
import SubHeading from "./typography/SubHeading";

const CallToAction = () => {

  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false); 
  const handleMoreDetails = async () => {
    setLoading(true); 
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    router.push('/cotesion');
    setLoading(false); 
  };

  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="bg-black/30 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center">
          <SubHeading className="text-white font-bold uppercase ">
            Your dream home is just a click away
          </SubHeading>

          <Paragraph className="text-white mt-4">
          Discover a home that perfectly fits your vision and lifestyle. With our expertise in design and attention to detail, we bring your dream home to life effortlessly. Start your journey with us and see how close you are to your ideal living space
          </Paragraph>
          <div className="flex  justify-center mt-3 w-full">
          <button 
        type="button" 
        className="sign border-none inline-flex items-center cursor-pointer font-medium text-[14px] text-white bg-[#cf4045] hover:bg-[#c13136]  px-2 py-1 rounded-md ml-4"
        onClick={handleMoreDetails} 
        disabled={loading} 
      >
        {loading ? (
          <div className="flex items-center">
            <span className="loader mr-2" />
            Loading...
          </div>
        ) : (
          "Get start"
        )}
      </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
