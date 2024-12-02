"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const InteriorDesignCard = ({
  id,
  imageSrc,
  caption,
  description,
  href,
}: {
  id:number
  imageSrc: string;
  caption: string;
  description: string;
  href: string;

}) => {

  const router = useRouter();
  const [loadingSlug, setLoadingSlug] = useState<number | null>(null); 

  const handleMoreDetails = async (id: number) => {
    setLoadingSlug(id); 
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(href)
    setLoadingSlug(null); 
  };


  return (
    <div className="w-full max-w-sm  rounded-lg  overflow-hidden bg-white shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-500">
      <Image
        width={400}
        height={400}
        className="object-cover object-center w-full h-56 "
        src={imageSrc}
        alt="img"
      />

      <div className="flex items-center px-3 py-2 bg-gray-900">
        <svg
          aria-label="design icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L2 7h20L12 2z" />
          <path d="M2 7v10l10 5 10-5V7H2z" />
        </svg>

        <h3 className="mx-3 text-lg font-semibold text-white">{caption}</h3>
      </div>

      <div className="p-4">
        
        <p className="pt-2 text-base mb-2 text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <div className="flex  justify-start  w-full">
          <button
            type="button"
            onClick={() => handleMoreDetails(id)}
            disabled={loadingSlug === id} 
            className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
            
          >
             {loadingSlug === id ? ( 
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
    </div>
  );
};

export default InteriorDesignCard;
